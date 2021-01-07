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

export interface ValidationMessages {
  INVALID_FILE_TYPE?: string;
  INVALID_FILE_SIZE?: string;
  INVALID_MIME_TYPE?: string;
  maxFileSizeLabel?: string;
  allowedFileTypesLabel?: string;
}
