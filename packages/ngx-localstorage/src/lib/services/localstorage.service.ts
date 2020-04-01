import {Inject, Injectable} from '@angular/core';
import {STORAGE_TOKEN} from '../providers/storage.provider';
import {IStorage} from '../types/localstorage.types';

@Injectable()
export class LocalstorageService {
  constructor(
    @Inject(STORAGE_TOKEN) private readonly pStorage: IStorage
  ) {
  }

  /**
   * @deprecated
   */
  public setItem(key: string, value: string): void {
    this.storage.setItem(key, value);
  }

  /**
   * @deprecated
   */
  public getItem(key: string): string {
    return this.storage.getItem(key);
  }

  /**
   * @deprecated
   */
  public removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  /**
   * @deprecated
   */
  public clear(): void {
    this.storage.clear();
  }

  get storage(): Storage {
    return this.pStorage;
  }
}
