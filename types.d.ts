declare module 'events' {
  import * as events from 'node:events';
  export = events;
}

// Global File polyfill for Node.js/Cloudflare Workers compatibility
declare global {
  var File: {
    new (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File;
    prototype: File;
  };
}

// Comprehensive File polyfill for server-side rendering
if (typeof globalThis !== 'undefined') {
  if (typeof globalThis.File === 'undefined') {
    class FilePolyfill implements File {
      name: string;
      size: number;
      type: string;
      lastModified: number;
      webkitRelativePath: string = '';

      constructor(fileBits: BlobPart[], fileName: string, options?: FilePropertyBag) {
        this.name = fileName;
        this.size = fileBits.reduce((total, bit) => {
          if (typeof bit === 'string') return total + bit.length;
          if (bit instanceof ArrayBuffer) return total + bit.byteLength;
          if (bit instanceof Blob) return total + bit.size;
          return total;
        }, 0);
        this.type = options?.type || '';
        this.lastModified = options?.lastModified || Date.now();
      }

      // Blob methods
      slice(start?: number, end?: number, contentType?: string): Blob {
        return new Blob([], { type: contentType });
      }

      stream(): ReadableStream<Uint8Array> {
        return new ReadableStream();
      }

      text(): Promise<string> {
        return Promise.resolve('');
      }

      arrayBuffer(): Promise<ArrayBuffer> {
        return Promise.resolve(new ArrayBuffer(0));
      }
    }

    globalThis.File = FilePolyfill as any;
  }

  // Also ensure Blob is available
  if (typeof globalThis.Blob === 'undefined') {
    class BlobPolyfill implements Blob {
      size: number = 0;
      type: string = '';

      constructor(blobParts?: BlobPart[], options?: BlobPropertyBag) {
        this.type = options?.type || '';
      }

      slice(start?: number, end?: number, contentType?: string): Blob {
        return new BlobPolyfill([], { type: contentType });
      }

      stream(): ReadableStream<Uint8Array> {
        return new ReadableStream();
      }

      text(): Promise<string> {
        return Promise.resolve('');
      }

      arrayBuffer(): Promise<ArrayBuffer> {
        return Promise.resolve(new ArrayBuffer(0));
      }
    }

    globalThis.Blob = BlobPolyfill as any;
  }
}