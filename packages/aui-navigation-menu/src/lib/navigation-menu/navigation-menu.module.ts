import {NgModule, ModuleWithProviders} from '@angular/core';
import {MenuService} from './services/menu.service';
import {Menu} from './interfaces';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {COMPONENTS} from './components';
import {AuiModule} from './aui/aui.module';

const defaultConfiguration: Menu.ModuleConfiguration = {
  dockedByDefault: false,
};

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    AuiModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    MenuService,
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
        {
          provide: 'config',
          useValue: configuration,
        },
      ],
    };
  }
}
