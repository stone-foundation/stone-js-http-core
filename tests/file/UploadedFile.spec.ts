import mime from 'mime';
import { basename, extname } from 'node:path';
import { FileError } from '../../src/errors/FileError';
import { UploadedFile } from '../../src/file/UploadedFile';
import { existsSync, renameSync, chmodSync } from 'node:fs';

vi.mock('node:fs');
vi.mock('node:path');
vi.mock('mime');

/**
 * Unit tests for the UploadedFile class.
 */
describe('UploadedFile', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('constructor', () => {
    it('should create an instance of UploadedFile with correct properties', () => {
      (basename as vi.fn).mockReturnValue('original-name.txt');
      const uploadedFile = new UploadedFile('/path/to/file.txt', 'original-name.txt', 'text/plain');

      expect(uploadedFile).toBeInstanceOf(UploadedFile);
      expect(uploadedFile.getClientOriginalName()).toBe('original-name.txt');
      expect(uploadedFile.getClientMimeType()).toBe('text/plain');
    });

    it('should use default MIME type if not provided', () => {
      (basename as vi.Mock).mockReturnValue('original-name.txt');
      const uploadedFile = new UploadedFile('/path/to/file.txt', 'original-name.txt');

      expect(uploadedFile.getClientMimeType()).toBe('application/octet-stream');
    });
  });

  describe('getClientOriginalName', () => {
    it('should return the original name of the uploaded file', () => {
      (basename as vi.Mock).mockReturnValue('original-name.txt');
      const uploadedFile = new UploadedFile('/path/to/file.txt', 'original-name.txt');
      expect(uploadedFile.getClientOriginalName()).toBe('original-name.txt');
    });
  });

  describe('getClientOriginalExtension', () => {
    it('should return the original file extension', () => {
      (extname as vi.Mock).mockReturnValue('.txt');
      const uploadedFile = new UploadedFile('/path/to/file.txt', 'original-name.txt');
      expect(uploadedFile.getClientOriginalExtension()).toBe('.txt');
    });
  });

  describe('getClientMimeType', () => {
    it('should return the MIME type of the uploaded file', () => {
      const uploadedFile = new UploadedFile('/path/to/file.txt', 'original-name.txt', 'text/plain');
      expect(uploadedFile.getClientMimeType()).toBe('text/plain');
    });
  });

  describe('guessClientExtension', () => {
    it('should guess the file extension based on the MIME type', () => {
      (mime.getExtension as vi.Mock).mockReturnValue('txt');
      const uploadedFile = new UploadedFile('/path/to/file.txt', 'original-name.txt', 'text/plain');
      expect(uploadedFile.guessClientExtension()).toBe('txt');
      expect(mime.getExtension).toHaveBeenCalledWith('text/plain');
    });

    it('should return undefined if MIME type is not recognized', () => {
      (mime.getExtension as vi.Mock).mockReturnValue(undefined);
      const uploadedFile = new UploadedFile('/path/to/file.txt', 'original-name.txt', 'unknown/type');
      expect(uploadedFile.guessClientExtension()).toBeUndefined();
    });
  });

  describe('isValid', () => {
    it('should return true if the file exists', () => {
      (existsSync as vi.Mock).mockReturnValue(true);
      const uploadedFile = new UploadedFile('/path/to/file.txt', 'original-name.txt');
      expect(uploadedFile.isValid()).toBe(true);
    });

    it('should return false if the file does not exist', () => {
      (existsSync as vi.Mock).mockReturnValue(false);
      const uploadedFile = new UploadedFile('/path/to/file.txt', 'original-name.txt');
      expect(uploadedFile.isValid()).toBe(false);
    });
  });

  describe('move', () => {
    it('should move the file to the specified directory if it is valid', () => {
      (existsSync as vi.Mock).mockReturnValue(true);
      const uploadedFile = new UploadedFile('/path/to/file.txt', 'original-name.txt');
      const targetPath = '/new/path/to/file.txt';
      (renameSync as vi.Mock).mockImplementation(() => {});
      (chmodSync as vi.Mock).mockImplementation(() => {});

      const movedFile = uploadedFile.move('/new/path');

      expect(renameSync).toHaveBeenCalledWith('/path/to/file.txt', targetPath);
      expect(movedFile).toBeInstanceOf(UploadedFile);
      expect(movedFile.getPath()).toBe(targetPath);
    });

    it('should throw an error if the file is not valid', () => {
      (existsSync as vi.Mock).mockReturnValue(false);
      const uploadedFile = new UploadedFile('/path/to/file.txt', 'original-name.txt');
      expect(() => uploadedFile.move('/new/path')).toThrow(FileError);
      expect(() => uploadedFile.move('/new/path')).toThrow('No file was uploaded.');
    });
  });
});
