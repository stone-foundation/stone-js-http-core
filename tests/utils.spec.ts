import { createWriteStream } from 'node:fs'
import { File, FilesystemError, UploadedFile } from '@stone-js/filesystem'
import { BadRequestError } from '../src/errors/BadRequestError'
import { InternalServerError } from '../src/errors/InternalServerError'
import { IncomingMessage, IncomingHttpHeaders, OutgoingMessage } from 'http'
import { getCharset, getHostname, getProtocol, getType, isIpTrusted, isMultipart, streamFile, getFilesUploads } from '../src/utils'

// Mocking values and spies
let MockSend: any
let MockBusboy: any
const MockSendOnSpy = vi.fn()

// Mocking dependencies
vi.mock('node:fs')
vi.mock('node:os')
vi.mock('node:path')
vi.mock('send', () => ({ default: (...args: any[]) => (MockSend) }))
vi.mock('busboy', () => ({ default: (...args: any[]) => (MockBusboy) }))
vi.mock('on-finished', () => ({ default: (res: OutgoingMessage, cb: (error: Error) => void) => MockSend.on('close', cb) }))

/* eslint-disable @typescript-eslint/no-useless-constructor */

// Mocking IncomingMessage
class MockIncomingMessage extends IncomingMessage {
  constructor (headers: IncomingHttpHeaders) {
    super({} as any)
    this.headers = headers
  }
}

// Mocking OutgoingMessage
class MockOutgoingMessage extends OutgoingMessage {
  constructor () {
    super()
  }
}

describe('Utility Functions', () => {
  beforeEach(() => {
    MockSend = {
      listeners: {} as any,
      pipe (res: OutgoingMessage) {
        this.emit('headers', res)
        this.emit('stream')
        this.emit('file')
        this.emit('close')
        this.emit('end')
      },
      on (event: string, callback: Function) {
        this.listeners[event] = callback
        return this
      },
      emit (event: string, ...args: any[]) {
        this.listeners[event](...args)
        MockSendOnSpy(event)
      }
    }
    MockBusboy = {
      listeners: {} as any,
      pipe (req: IncomingMessage) {
        this.emit('field', 'username', 'test')
        this.emit('file', 'filename', {
          pipe () {},
          on (event: string, callback: Function) { callback() }
        }, { filename: 'test.txt', mimeType: 'text/plain' })
        this.emit('close')
      },
      write (data: any) {},
      end () {
        this.pipe()
      },
      on (event: string, callback: Function) {
        this.listeners[event] = callback
        return this
      },
      emit (event: string, ...args: any[]) {
        this.listeners[event](...args)
      }
    }
    // @ts-expect-error
    createWriteStream.mockReturnValue({ on: vi.fn(), pipe: vi.fn() })
    UploadedFile.createFile = vi.fn().mockReturnValue({ filename: 'test.txt', mimeType: 'text/plain' })
  })

  describe('isMultipart', () => {
    it('should return true for multipart content type string', () => {
      const result = isMultipart('multipart/form-data')
      expect(result).toBe(true)
    })

    it('should return false for non-multipart content type string', () => {
      const result = isMultipart('application/json')
      expect(result).toBe(false)
    })

    it('should return false for non-multipart IncomingMessage', () => {
      const message = new MockIncomingMessage({ 'content-type': 'application/json' })
      const result = isMultipart(message)
      expect(result).toBe(false)
    })
  })

  describe('getType', () => {
    it('should return content type for IncomingMessage', () => {
      const message = new MockIncomingMessage({ 'content-type': 'application/json' })
      const result = getType(message)
      expect(result).toBe('application/json')
    })

    it('should return fallback for invalid content type', () => {
      const result = getType('invalid-content-type', 'text/plain')
      expect(result).toBe('text/plain')
    })
  })

  describe('getCharset', () => {
    it('should return charset for IncomingMessage', () => {
      const message = new MockIncomingMessage({ 'content-type': 'application/json; charset=utf-8' })
      const result = getCharset(message)
      expect(result).toBe('utf-8')
    })

    it('should return fallback for invalid charset', () => {
      const result = getCharset('invalid-content-type', 'utf-8')
      expect(result).toBe('utf-8')
    })
  })

  describe('isIpTrusted', () => {
    it('should return true for trusted IP', () => {
      const isTrusted = isIpTrusted(['192.168.1.1'], [])
      expect(isTrusted('192.168.1.1')).toBe(true)
    })

    it('should return false for untrusted IP', () => {
      const isTrusted = isIpTrusted(['192.168.1.1'], ['*'])
      expect(isTrusted('192.168.1.1')).toBe(false)
    })
  })

  describe('getProtocol', () => {
    it('should return https if encrypted', () => {
      const result = getProtocol('192.168.1.1', {}, true, { trustedIp: [], untrustedIp: [] })
      expect(result).toBe('https')
    })

    it('should return http if not encrypted and IP is trusted', () => {
      const result = getProtocol('192.168.1.1', {}, false, { trustedIp: ['*'], untrustedIp: [] })
      expect(result).toBe('http')
    })

    it('should return forwarded protocol if IP is trusted', () => {
      const result = getProtocol('192.168.1.1', { 'x-forwarded-proto': 'https' }, false, { trustedIp: ['*'], untrustedIp: [] })
      expect(result).toBe('https')
    })
  })

  describe('getHostname', () => {
    it('should return hostname from headers', () => {
      const headers = { host: 'example.com' }
      const result = getHostname('192.168.1.1', headers, { trusted: [/.+(ample.com)/], trustedIp: ['*'], untrustedIp: [] })
      expect(result).toBe('example.com')
    })

    it('should return hostname from headers with IPv6', () => {
      const headers = { 'x-forwarded-host': '[2001:0db8:85a3:0000:0000:8a2e:0370:7334]' }
      const result = getHostname('192.168.1.1', headers, { trusted: [], trustedIp: ['192.168.1.1'], untrustedIp: [] })
      expect(result).toBe('[2001:0db8:85a3:0000:0000:8a2e:0370:7334]')
    })

    it('should return undefined when hostname is undefined', () => {
      const headers = {}
      const result = getHostname('192.168.1.1', headers, { trusted: [], trustedIp: ['*'], untrustedIp: [] })
      expect(result).toBeUndefined()
    })

    it('should throw error for invalid hostname', () => {
      const headers = { host: 'invalid_hostname' }
      expect(() => getHostname('192.168.1.1', headers, { trusted: [], trustedIp: ['*'], untrustedIp: [] })).toThrow('SuspiciousOperation: Invalid Host invalid_hostname with ip(192.168.1.1)')
    })

    it('should throw error for untrusted hostname', () => {
      const headers = { host: 'untrusted.com' }
      expect(() => getHostname('192.168.1.1', headers, { trusted: ['trusted.com'], trustedIp: ['*'], untrustedIp: [] })).toThrow('SuspiciousOperation: Untrusted Host untrusted.com with ip(192.168.1.1)')
    })
  })

  describe('getFilesUploads', () => {
    it('should resolve with fields and files for pre-read file uploads', async () => {
      const options = { limits: { fileSize: '1mb' } }
      const event = { headers: { 'content-type': 'multipart/form-data' }, body: 'dummy body' }

      const result = await getFilesUploads(event, options)
      expect(result.fields).toEqual({ username: 'test' })
      expect(result.files).toHaveProperty('filename')
    })

    it('should resolve with fields and files for streamed file uploads', async () => {
      const options = { limits: { fileSize: undefined } }
      const event = new MockIncomingMessage({ 'content-type': 'multipart/form-data' })
      event.pipe = () => MockBusboy.pipe(event)
      event.on = vi.fn()

      const result = await getFilesUploads(event, options)
      expect(result.fields).toEqual({ username: 'test' })
      expect(result.files).toHaveProperty('filename')
    })

    it('should throw an error on streamed file uploads', async () => {
      const options = { limits: { fileSize: undefined } }
      const event = new MockIncomingMessage({ 'content-type': 'multipart/form-data' })
      event.pipe = vi.fn()
      event.on = (event: string, handler: Function) => handler({ message: 'Error', code: 'EIO' })

      await expect(async () => await getFilesUploads(event, options)).rejects.toThrow(InternalServerError)
    })

    it('should throw an error on when file cannot be saved', async () => {
      const options = { limits: { fileSize: undefined } }
      const event = new MockIncomingMessage({ 'content-type': 'multipart/form-data' })
      event.pipe = () => MockBusboy.pipe(event)
      event.on = vi.fn()
      // @ts-expect-error
      createWriteStream.mockReturnValue({ on: (event: string, handler: Function) => handler({ message: 'Error', code: 'EIO' }) })

      await expect(async () => await getFilesUploads(event, options)).rejects.toThrow(FilesystemError)
    })
  })

  describe('streamFile', () => {
    it('should handle file streaming successfully', async () => {
      const message = new MockIncomingMessage({})
      const response = new MockOutgoingMessage()
      const file = File.create('test/path', false)

      const res = await streamFile(message, response, file, { headers: { 'content-type': 'application/octet-stream' } })

      expect(res).toBeUndefined()
      expect(MockSendOnSpy).toHaveBeenCalled()
    })

    it('should throw an unexpected error while handling file', async () => {
      const message = new MockIncomingMessage({})
      const response = new MockOutgoingMessage()
      const file = File.create('test/path', false)

      MockSend = {
        ...MockSend,
        pipe (res: OutgoingMessage) {
          this.emit('close', { message: 'Error', code: 'EIO' })
        }
      }

      await expect(async () => await streamFile(message, response, file, {} as any)).rejects.toThrow(InternalServerError)
    })

    it('should throw a request aborted error when there is an error while handling file', async () => {
      const message = new MockIncomingMessage({})
      const response = new MockOutgoingMessage()
      const file = File.create('test/path', false)

      MockSend = {
        ...MockSend,
        pipe (res: OutgoingMessage) {
          this.emit('close', { message: 'Error', code: 'ECONNRESET' })
        }
      }

      await expect(async () => await streamFile(message, response, file, {} as any)).rejects.toThrow(BadRequestError)
    })

    it('should throw a request aborted error when file not completely streamed', async () => {
      const message = new MockIncomingMessage({})
      const response = new MockOutgoingMessage()
      const file = File.create('test/path', false)

      MockSend = {
        ...MockSend,
        pipe (res: OutgoingMessage) {
          this.emit('stream')
          this.emit('close')
        }
      }

      await expect(async () => await streamFile(message, response, file, {} as any)).rejects.toThrow(BadRequestError)
    })
  })
})
