import { Mock } from 'vitest'
import { gzip, brotliCompress, deflate } from 'node:zlib'
import { CompressionMiddleware } from '../../src/middleware/CompressionMiddleware'

vi.mock('node:zlib') // Mock zlib compression methods

describe('CompressionMiddleware', () => {
  let middleware: any

  beforeEach(() => {
    middleware = new CompressionMiddleware()
  })

  it('should compress content using gzip if the client supports it', async () => {
    const eventMock = { getHeader: vi.fn().mockReturnValue('gzip') }
    const nextMock = vi.fn().mockResolvedValue({
      content: 'This is a test content that is larger than 1KB.'.repeat(50), // >1KB
      setContent: vi.fn()
    })

    const compressedBuffer = Buffer.from('compressed content');
    (gzip as unknown as Mock).mockImplementation((_buffer, cb) => cb(null, compressedBuffer))

    const response = await middleware.handle(eventMock, nextMock)

    expect(eventMock.getHeader).toHaveBeenCalledWith('accept-encoding')
    expect(nextMock).toHaveBeenCalled()
    expect(gzip).toHaveBeenCalled()
    expect(response.setContent).toHaveBeenCalledWith(compressedBuffer)
  })

  it('should compress content using Brotli if the client supports it', async () => {
    const eventMock = { getHeader: vi.fn().mockReturnValue('br') }
    const nextMock = vi.fn().mockResolvedValue({
      content: Buffer.from('This is compressible content.'),
      setContent: vi.fn()
    })

    const compressedBuffer = Buffer.from('compressed content');
    (brotliCompress as unknown as Mock).mockImplementation((buffer, cb) => cb(null, compressedBuffer))

    const response = await middleware.handle(eventMock, nextMock)

    expect(eventMock.getHeader).toHaveBeenCalledWith('accept-encoding')
    expect(nextMock).toHaveBeenCalled()
    expect(brotliCompress).toHaveBeenCalled()
    expect(response.setContent).toHaveBeenCalledWith(compressedBuffer)
  })

  it('should skip compression if no encoding is supported', async () => {
    const eventMock = { getHeader: vi.fn().mockReturnValue('') }
    const nextMock = vi.fn().mockResolvedValue({
      content: Buffer.from('This is compressible content.'),
      setContent: vi.fn()
    })

    const response = await middleware.handle(eventMock, nextMock)

    expect(eventMock.getHeader).toHaveBeenCalledWith('accept-encoding')
    expect(nextMock).toHaveBeenCalled()
    expect(response.setContent).not.toHaveBeenCalled()
  })

  it('should skip compression for content smaller than 1KB', async () => {
    const eventMock = { getHeader: vi.fn().mockReturnValue('gzip') }
    const nextMock = vi.fn().mockResolvedValue({
      content: 'Short content',
      setContent: vi.fn()
    })

    const response = await middleware.handle(eventMock, nextMock)

    expect(nextMock).toHaveBeenCalled()
    expect(response.setContent).not.toHaveBeenCalled()
    expect(gzip).not.toHaveBeenCalled()
  })

  it('should handle errors during compression gracefully', async () => {
    const eventMock = { getHeader: vi.fn().mockReturnValue('gzip') }
    const nextMock = vi.fn().mockResolvedValue({
      content: Buffer.from('This is compressible content.'),
      setContent: vi.fn()
    });

    (gzip as unknown as Mock).mockImplementation((buffer, cb) => cb(new Error('Compression error')))

    const response = await middleware.handle(eventMock, nextMock)

    expect(nextMock).toHaveBeenCalled()
    expect(gzip).toHaveBeenCalled()
    expect(response.setContent).not.toHaveBeenCalled()
  })

  it('should compress content using deflate if the client supports it', async () => {
    const eventMock = { getHeader: vi.fn().mockReturnValue('deflate') }
    const nextMock = vi.fn().mockResolvedValue({
      content: Buffer.from('This is compressible content.'),
      setContent: vi.fn()
    })

    const compressedBuffer = Buffer.from('compressed content');
    (deflate as unknown as Mock).mockImplementation((buffer, cb) => cb(null, compressedBuffer))

    const response = await middleware.handle(eventMock, nextMock)

    expect(eventMock.getHeader).toHaveBeenCalledWith('accept-encoding')
    expect(nextMock).toHaveBeenCalled()
    expect(deflate).toHaveBeenCalled()
    expect(response.setContent).toHaveBeenCalledWith(compressedBuffer)
  })

  it('should fall back to gzip if no valid encoding is provided', async () => {
    const eventMock = { getHeader: vi.fn().mockReturnValue('invalid-encoding') }
    const nextMock = vi.fn().mockResolvedValue({
      content: Buffer.from('This is compressible content.'),
      setContent: vi.fn()
    })

    const compressedBuffer = Buffer.from('compressed content');
    (gzip as unknown as Mock).mockImplementation((buffer, cb) => cb(null, compressedBuffer))

    const response = await middleware.handle(eventMock, nextMock)

    expect(eventMock.getHeader).toHaveBeenCalledWith('accept-encoding')
    expect(nextMock).toHaveBeenCalled()
    expect(gzip).toHaveBeenCalled()
    expect(response.setContent).toHaveBeenCalledWith(compressedBuffer)
  })

  it('should not compress if the content is not compressible', async () => {
    const eventMock = { getHeader: vi.fn().mockReturnValue('gzip') }
    const nextMock = vi.fn().mockResolvedValue({
      content: null,
      setContent: vi.fn()
    })

    const response = await middleware.handle(eventMock, nextMock)

    expect(nextMock).toHaveBeenCalled()
    expect(response.setContent).not.toHaveBeenCalled()
    expect(gzip).not.toHaveBeenCalled()
  })
})
