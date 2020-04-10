import {TemplateRef} from '@angular/core';
import {SubMenuItemComponent} from './components/sub-menu-item/sub-menu-item.component';
import {SubMenuComponent} from './components/sub-menu/sub-menu.component';
import {MenuTabComponent} from './components/menu-tab/menu-tab.component';

export declare namespace Menu {
  export type MenuMode = 'mobile' | 'desktop';

  export interface ActiveMenu {
    menuItem: (SubMenuItemComponent | MenuTabComponent);
    type: 'main' | 'submenu' | 'none';
    templateRef?: TemplateRef<void>;
    parentMenu?: SubMenuComponent;
    subMenu?: SubMenuComponent;
  }

  export interface MenuState {
    mode: Menu.MenuMode;
    docked: boolean;
    activeMenu: Menu.ActiveMenu;
  }

  export interface ModuleConfiguration {
    dockedByDefault?: boolean;
    moreIcon?: string;
    useLocalStorage?: boolean;
  }

  export interface Translations {
    lblMore?: string;
    lblBack?: string;
    lblHideMenu?: string;
  }

  export interface ISubMenuContext {
    // Template doesn't need a context at the time of writing but we declared an interface to be future proof
  }

  export interface ISubMenu {
    type: 'main' | 'submenu',
    templateRef: TemplateRef<Menu.ISubMenuContext>;
  }

  export interface ChecksChildren {
    /**
     * Method check if the children of the component
     * only includes allowed node types, to prevent users
     * from inclusing irrelevant content
     * @throws if the child contains forbidden node types
     */
    checkChildren(): void;
  }
}
