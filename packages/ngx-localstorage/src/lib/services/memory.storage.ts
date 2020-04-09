import {Injectable} from '@angular/core';
import {IStorage} from '../types/localstorage.types';


@Injectable()
export class MemoryStorage implements IStorage {
  [name: string]: any;

  private items: { [key: string]: string } = {};

  get length(): number {
    return Object.keys(this.items).length;
  }

  clear(): void {
    this.items = {};
  }

  getItem(key: string): string | null {
    return this.items.key;
  }

  key(index: number): string | null {
    return Object.keys(this.items)[index];
  }

  removeItem(key: string): void {
    delete this.items.key;
  }

  setItem(key: string, value: string): void {
    this.items.key = value;
  }

}
