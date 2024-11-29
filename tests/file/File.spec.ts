// import mime from 'mime'
import { filesize } from 'filesize'
import { createHash } from 'node:crypto'
// import { resolve, join } from 'node:path'
import { File } from '../../src/file/File'
// import { mkdirSync, statSync, writeFileSync, renameSync, rmSync, accessSync, existsSync, readFileSync } from 'node:fs'

const mockHash = {
  update: vi.fn().mockReturnThis(),
  digest: vi.fn().mockReturnValue('hashed-content')
}

vi.mock('node:fs', () => ({
  statSync: vi.fn(() => ({
    size: 12345
  })),
  existsSync: vi.fn(),
  accessSync: vi.fn(() => {}),
  writeFileSync: vi.fn(),
  readFileSync: vi.fn(() => 'File content'),
  mkdirSync: vi.fn(),
  renameSync: vi.fn(),
  rmSync: vi.fn(),
  constants: {
    W_OK: 2,
    R_OK: 4,
    X_OK: 1
  }
}))
vi.mock('node:crypto', () => ({
  createHash: vi.fn(() => mockHash)
}))
vi.mock('node:path')
vi.mock('mime')
vi.mock('filesize', () => ({ filesize: vi.fn(() => '12.3 kB') }))

/**
 * Unit tests for the File class (Part 2).
 */
describe('File', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('getHashedContent', () => {
    it('should return the hashed content of the file', () => {
      const file = File.create('/path/to/file.txt', false)
      const hashedContent = file.getHashedContent('sha256')

      expect(createHash).toHaveBeenCalledWith('sha256')
      expect(mockHash.update).toHaveBeenCalledWith('File content', 'utf-8')
      expect(mockHash.digest).toHaveBeenCalledWith('hex')
      expect(hashedContent).toBe('hashed-content')
    })
  })

  describe('getSize', () => {
    it('should return the file size as a number', () => {
      const file = File.create('/path/to/file.txt', false)
      const size = file.getSize()
      expect(size).toBe(12345)
    })

    it('should return the file size as a formatted string', () => {
      const file = File.create('/path/to/file.txt', false)
      const formattedSize = file.getSize(true)
      expect(filesize).toHaveBeenCalledWith(12345)
      expect(formattedSize).toBe('12.3 kB')
    })
  })

  // describe('getMimeType', () => {
  //   it('should return the MIME type of the file', () => {
  //     (mime.getType as vi.Mock).mockReturnValue('text/plain');
  //     const file = new File('/path/to/file.txt', false);
  //     const mimeType = file.getMimeType();
  //     expect(mime.getType).toHaveBeenCalledWith('/path/to/file.txt');
  //     expect(mimeType).toBe('text/plain');
  //   });

  //   it('should return the fallback MIME type if detection fails', () => {
  //     (mime.getType as vi.Mock).mockReturnValue(undefined);
  //     const file = new File('/path/to/file.txt', false);
  //     const mimeType = file.getMimeType('application/octet-stream');
  //     expect(mimeType).toBe('application/octet-stream');
  //   });
  // });

  // describe('getAbsolutePath', () => {
  //   it('should return the absolute path of the file', () => {
  //     (resolve as vi.Mock).mockReturnValue('/absolute/path/to/file.txt');
  //     const file = new File('/path/to/file.txt', false);
  //     const absolutePath = file.getAbsolutePath();
  //     expect(resolve).toHaveBeenCalledWith('', '/path/to/file.txt');
  //     expect(absolutePath).toBe('/absolute/path/to/file.txt');
  //   });
  // });

  // describe('getEncodedAbsolutePath', () => {
  //   it('should return the encoded absolute path of the file', () => {
  //     (resolve as vi.Mock).mockReturnValue('/absolute/path/to/file.txt');
  //     const file = new File('/path/to/file.txt', false);
  //     const encodedAbsolutePath = file.getEncodedAbsolutePath();
  //     expect(encodedAbsolutePath).toBe(encodeURI('/absolute/path/to/file.txt'));
  //   });
  // });

  // describe('exists', () => {
  //   it('should return true if the file exists', () => {
  //     (existsSync as vi.Mock).mockReturnValue(true);
  //     const file = new File('/path/to/file.txt', false);
  //     expect(file.exists()).toBe(true);
  //   });

  //   it('should return false if the file does not exist', () => {
  //     (existsSync as vi.Mock).mockReturnValue(false);
  //     const file = new File('/path/to/file.txt', false);
  //     expect(file.exists()).toBe(false);
  //   });
  // });

  // describe('isDir', () => {
  //   it('should return true if the file is a directory', () => {
  //     (statSync as vi.Mock).mockReturnValue({ isDirectory: () => true });
  //     const file = new File('/path/to/dir', false);
  //     expect(file.isDir()).toBe(true);
  //   });

  //   it('should return false if the file is not a directory', () => {
  //     (statSync as vi.Mock).mockReturnValue({ isDirectory: () => false });
  //     const file = new File('/path/to/file.txt', false);
  //     expect(file.isDir()).toBe(false);
  //   });
  // });
})
