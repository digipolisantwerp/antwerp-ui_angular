export interface UploadOptions {
  allowedMimeTypes?: string[];
  allowedFileTypes?: string[];
  autoUpload?: boolean;
  maxFileSize?: number;
  queueLimit?: number;
  type?: string;
  url?: string;
}

export interface InvalidFile {
    reasons: string[];
    file: File;
}

export const defaultOptions: UploadOptions = {
    allowedMimeTypes: [],
    allowedFileTypes: [],
    autoUpload: false,
    maxFileSize: 0, // 0 is infinite
    queueLimit: 0, // 0 is infinite
    type: 'drop',
    url: ''
};
