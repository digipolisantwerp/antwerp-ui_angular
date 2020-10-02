import {ModuleWithProviders, NgModule} from '@angular/core';
import {MenuService} from './services/menu.service';
import {Menu} from './interfaces';
import {RouterModule} from '@angular/router';
import {COMPONENTS} from './components/components';
import {AuiModule} from './aui/aui.module';
import {LocalstorageService} from './services/localstorage.service';
import {CommonModule} from '@angular/common';

const defaultConfiguration: Menu.ModuleConfiguration = {
  dockedByDefault: false,
  useLocalStorage: true
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuiModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    MenuService,
    LocalstorageService,
    {
      provide: 'config',
      useValue: defaultConfiguration,
    },
  ],
  exports: [
    ...COMPONENTS,
  ],
})
export class NavigationMenuModule {

  public static configure(configuration: Menu.ModuleConfiguration = defaultConfiguration): ModuleWithProviders {
    return {
      ngModule: NavigationMenuModule,
      providers: [
        MenuService,
        LocalstorageService,
        {
          provide: 'config',
          useValue: configuration,
        },
      ],
    };
  }
}
