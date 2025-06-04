import { NextPipe } from '@stone-js/pipeline'
import { IncomingHttpEvent } from '../IncomingHttpEvent'
import { OutgoingHttpResponse } from '../OutgoingHttpResponse'

/**
 * Middleware to compress response content based on the Accept-Encoding header.
 */
export class CompressionMiddleware {
  /**
   * Compress the response content based on the Accept-Encoding header.
   *
   * @param event - The incoming HTTP event.
   * @param next - The next middleware in the pipeline.
   * @returns The outgoing HTTP response.
   */
  async handle (event: IncomingHttpEvent, next: NextPipe<IncomingHttpEvent, OutgoingHttpResponse>): Promise<OutgoingHttpResponse> {
    const response = await next(event)

    if (this.isCompressibleContent(response.content)) {
      const encoding = this.getCompressionFormatFromEvent(event)
      response.setContent(await this.compressContent(response.content, encoding))
    }

    return response
  }

  /**
   * Determine the best compression format from the Accept-Encoding header.
   *
   * @param event - The incoming HTTP event.
   * @returns The best compression format to use.
   */
  private getCompressionFormatFromEvent (event: IncomingHttpEvent): 'gzip' | 'deflate' | 'br' | undefined {
    const acceptedEncodings = event
      .getHeader('accept-encoding', '')
      .split(',')
      .map(enc => enc.trim().toLowerCase())

    const priorities: Array<'br' | 'gzip' | 'deflate'> = ['br', 'gzip', 'deflate']
    return priorities.find(encoding => acceptedEncodings.includes(encoding))
  }

  /**
   * Compress content using the specified encoding.
   *
   * @param content - The content to compress.
   * @param encoding - The encoding to use (gzip, deflate, br).
   * @returns The compressed content.
   */
  private async compressContent (content: string | Buffer, encoding: 'gzip' | 'deflate' | 'br' | undefined = 'gzip'): Promise<Buffer> {
    const { gzip, deflate, brotliCompress } = await import('node:zlib')

    return await new Promise((resolve, reject) => {
      const buffer = Buffer.isBuffer(content) ? content : Buffer.from(content, 'utf-8')

      switch (encoding) {
        case 'gzip':
          return gzip(buffer, (err, compressed) => ((err != null) ? reject(err) : resolve(compressed)))
        case 'deflate':
          return deflate(buffer, (err, compressed) => ((err != null) ? reject(err) : resolve(compressed)))
        case 'br':
          return brotliCompress(buffer, (err, compressed) => ((err != null) ? reject(err) : resolve(compressed)))
        default:
          resolve(buffer)
      }
    })
  }

  /**
   * Check if the content is compressible (string or Buffer).
   * Only compress Buffer content and string content that is larger than 1KB.
   *
   * @param content - The content to check.
   * @returns True if the content is compressible.
   */
  private isCompressibleContent (content: unknown): content is string | Buffer {
    return (typeof content === 'string' && content.length > 1000) || Buffer.isBuffer(content)
  }
}
