declare module 'events' {
  import * as events from 'node:events';
  export = events;
}

// SSR-safe File type polyfill
declare global {
  namespace NodeJS {
    interface Global {
      File: typeof File;
    }
  }
}

// Polyfill for File in Node.js environment during build
if (typeof globalThis !== 'undefined' && typeof globalThis.File === 'undefined') {
  (globalThis as any).File = class File {
    name: string;
    size: number;
    type: string;
    lastModified: number;

    constructor(fileBits: BlobPart[], fileName: string, options?: FilePropertyBag) {
      this.name = fileName;
      this.size = 0;
      this.type = options?.type || '';
      this.lastModified = options?.lastModified || Date.now();
    }
  };
}