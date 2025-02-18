import send from 'send'
import bytes from 'bytes'
import Busboy from 'busboy'
import typeIs from 'type-is'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import contentType from 'content-type'
import { randomUUID } from 'node:crypto'
import ipRangeCheck from 'ip-range-check'
import { createWriteStream } from 'node:fs'
import { IncomingHttpHeaders } from 'node:http'
import { StreamFileOptions } from './declarations'
import { NotFoundError } from './errors/NotFoundError'
import { IncomingMessage, OutgoingMessage } from 'http'
import { BadRequestError } from './errors/BadRequestError'
import { OutgoingHttpResponse } from './OutgoingHttpResponse'
import { InternalServerError } from './errors/InternalServerError'
import { File, UploadedFile, FilesystemError } from '@stone-js/filesystem'

/**
 * Decorator response callback.
 *
 * @param target - The target function.
 * @param responseCallback - The response callback.
 * @returns The function with the response callback.
 */
export function decoratorResponseCallback<TTarget, TFunction, UReturn extends OutgoingHttpResponse> (
  target: TTarget,
  responseCallback: (content: any) => Promise<UReturn>
): TFunction {
  return async function (this: TTarget, ...args: any[]): Promise<UReturn> {
    const content = await (target as Function).apply(this, args)
    return await responseCallback(content)
  } as TFunction
}

/**
 * Check if multipart message.
 *
 * @param value - The incoming message or content type string.
 * @returns True if the content type is multipart.
 */
export function isMultipart (value: IncomingMessage | string): boolean {
  return typeof value === 'string'
    ? typeIs.is(value, ['multipart']) === 'multipart'
    : typeIs(value, ['multipart']) === 'multipart'
}

/**
 * Get message content type.
 *
 * @param value - The incoming message or content type string.
 * @param fallback - Fallback content type if parsing fails.
 * @returns The content type of the message.
 */
export function getType (value: IncomingMessage | string, fallback: string = 'text/plain'): string {
  try {
    return contentType.parse(value).type
  } catch (_) {
    return fallback
  }
}

/**
 * Get message content charset.
 *
 * @param value - The incoming message or content type string.
 * @param fallback - Fallback charset if parsing fails.
 * @returns The charset of the message.
 */
export function getCharset (value: IncomingMessage | string, fallback: string = 'utf-8'): string {
  try {
    return contentType.parse(value).parameters.charset
  } catch (_) {
    return fallback
  }
}

/**
 * Check if IP is trusted or not.
 *
 * @param trusted - Array of trusted IPs or wildcard.
 * @param untrusted - Array of untrusted IPs or wildcard.
 * @returns A function to verify if a given IP is trusted.
 */
export function isIpTrusted (trusted: string | string[], untrusted: string | string[] = []): (ip: string) => boolean {
  return (ip: string): boolean => {
    if (untrusted.includes('*') || ipRangeCheck(ip, untrusted)) {
      return false
    }

    return trusted.includes('*') || ipRangeCheck(ip, trusted)
  }
}

/**
 * Get protocol.
 *
 * @param ip - The IP address of the request.
 * @param headers - The headers from the incoming request.
 * @param encrypted - Whether the connection is encrypted (HTTPS).
 * @param options - Options for trusted and untrusted IPs.
 * @returns The protocol (http or https).
 */
export function getProtocol (ip: string, headers: IncomingHttpHeaders, encrypted: boolean, { trustedIp, untrustedIp }: { trustedIp: string[], untrustedIp: string[] }): string {
  let protocol = encrypted ? 'https' : 'http'

  if (isIpTrusted(trustedIp, untrustedIp)(ip)) {
    protocol = (headers['X-Forwarded-Proto'] as string ?? headers['x-forwarded-proto'] as string)?.split(',').shift()?.trim() ?? protocol
  }

  return protocol
}

/**
 * Get hostname.
 *
 * @param ip - The IP address of the request.
 * @param headers - The headers from the incoming request.
 * @param options - Options for trusted IPs, fallback, etc.
 * @returns The hostname from the request.
 */
export function getHostname (ip: string, headers: IncomingHttpHeaders, { trusted, trustedIp, untrustedIp }: { trusted: Array<string | RegExp>, trustedIp: string[], untrustedIp: string[] }): string | undefined {
  let hostname = (headers.host ?? headers.Host) as string | undefined

  if (isIpTrusted(trustedIp, untrustedIp)(ip)) {
    hostname = (headers['X-Forwarded-Host'] as string ?? headers['x-forwarded-host'] as string)?.split(',').shift() ?? hostname
  }

  if (hostname === undefined) return hostname

  const match = hostname.match(/\[([0-9a-fA-F:]+)\]/) ?? undefined

  if (match !== undefined) {
    hostname = `[${match[1]}]`
  } else {
    hostname = hostname.trim().replace(/:\d+$/, '').toLowerCase()
  }

  if (!/^[[]?(?![0-9]+$)(?!-)(?:[a-zA-Z0-9-:\]]{1,63}\.?)+$/.test(hostname)) {
    throw new BadRequestError(`SuspiciousOperation: Invalid Host ${hostname} with ip(${ip})`)
  }

  if (trusted?.length > 0) {
    const isValid = trusted.some((pattern) => (pattern instanceof RegExp && pattern.test(hostname)) || pattern === hostname)

    if (!isValid) {
      throw new BadRequestError(`SuspiciousOperation: Untrusted Host ${hostname} with ip(${ip})`)
    }
  }

  return hostname
}

/**
 * Get file uploads.
 *
 * Get streamed or pre-read(not streamed) file upload.
 *
 * @param event - The incoming event containing the file data.
 * @param options - The options for file upload limits.
 * @returns A promise that resolves with the uploaded files and fields.
 */
export async function getFilesUploads (
  event: IncomingMessage | { headers: IncomingHttpHeaders, body: unknown },
  options: Record<string, any>
): Promise<{ files: Record<string, UploadedFile[]>, fields: Record<string, string> }> {
  return await new Promise((resolve, reject) => {
    options.limits ??= {}
    options.limits.fileSize = bytes.parse(options.limits.fileSize) ?? Infinity
    options.limits.fieldSize = bytes.parse(options.limits.fieldSize) ?? Infinity
    options.limits.fieldNameSize = bytes.parse(options.limits.fieldNameSize) ?? Infinity

    const busboy = Busboy({ headers: event.headers, ...options })
    const result: { files: Record<string, UploadedFile[]>, fields: Record<string, string> } = { files: {}, fields: {} }

    busboy
      .on('close', () => resolve(result))
      .on('error', (error: any) => reject(new FilesystemError(error.message, { cause: error })))
      .on('field', (fieldname, value) => { result.fields[fieldname] = value })
      .on('file', (fieldname, file, info) => {
        result.files[fieldname] ??= []
        const { filename, mimeType } = info
        const filepath = join(tmpdir(), `${String(options.prefix ?? 'file')}-${randomUUID()}`)
        const writeStream = createWriteStream(filepath)

        file.on('close', () => {
          result.files[fieldname].push(UploadedFile.createFile(filepath, filename, mimeType))
        })

        writeStream.on('error', (error: any) => {
          reject(new FilesystemError(error.message, { cause: error }))
        })

        file.pipe(writeStream)
      })

    if (event instanceof IncomingMessage) { // Handle streamed file uploads.
      event.pipe(busboy)
      event.on('error', (error: any) => {
        reject(new InternalServerError(error.message, { cause: error }))
      })
    } else { // Handle pre-read file uploads.
      busboy.write(event.body)
      busboy.end()
    }
  })
}

/**
 * Stream files from the file system as an HTTP response.
 *
 * Only for node http server.
 *
 * @param message - The incoming message.
 * @param response - The outgoing response.
 * @param fileResponse - The binary file response to be streamed.
 * @param options - The options for streaming.
 * @returns A promise that resolves when the file streaming is complete.
 */
export async function streamFile (
  message: IncomingMessage,
  response: OutgoingMessage,
  fileResponse: File,
  options: StreamFileOptions
): Promise<void> {
  return await new Promise((resolve, reject) => {
    const file = send(message, fileResponse.getEncodedPath(), options)

    response
      .on('finish', resolve)
      .on('close', (): void => reject(new BadRequestError('Request aborted by client.')))

    file
      .on('error', (error: any): void => reject(new InternalServerError(error.message, { cause: error })))
      .on('headers', (resp) => Object.entries(options.headers ?? {}).forEach(([key, value]) => resp.setHeader(key, value)))
      .on('directory', () => reject(new NotFoundError('EISDIR, read')))
      .on('end', resolve)
      .pipe(response)
  })
}
