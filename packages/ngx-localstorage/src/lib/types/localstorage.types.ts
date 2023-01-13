export interface ILocalStorageConfig {
  storageType?: LocalStorageType;
}

export type LocalStorageType = 'localStorage' | 'sessionStorage' | 'memory';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IStorage extends Storage {

}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IWindow extends Window {
}
