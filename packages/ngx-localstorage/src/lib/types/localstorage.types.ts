export interface ILocalStorageConfig {
  storageType?: LocalStorageType;
}

export type LocalStorageType = 'localStorage' | 'sessionStorage' | 'memory';

// tslint:disable-next-line:no-empty-interface
export interface IStorage extends Storage {

}

// tslint:disable-next-line:no-empty-interface
export interface IWindow extends Window {
}
