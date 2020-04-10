import {Injectable} from '@angular/core';
import {Menu} from '../interfaces';
import {LocalstorageService as LS} from '@acpaas-ui/ngx-localstorage';

@Injectable()
export class LocalstorageService {
  constructor(private storage: LS) {
  }

  getMenuState(): Menu.MenuState {
    const json: string = this.storage.storage.getItem('ngx-navigation-menu');
    try {
      return json ? JSON.parse(json) : null;
    } catch (e) {
      console.warn('Warning: could not parse navigation menu localStorage data.');
      return null;
    }
  }

  setMenuState(state: Menu.MenuState): void {
    this.storage.storage.setItem('ngx-navigation-menu', JSON.stringify({
      docked: state.docked
    }));
  }
}
