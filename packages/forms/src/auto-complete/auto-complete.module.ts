import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlyoutModule } from '@acpaas-ui/ngx-flyout';
import { SelectableListModule } from '@acpaas-ui/selectable-list';
import { MaskModule } from '../mask/mask.module';

import { AutoCompleteComponent } from './components/auto-complete.component';
import { SearchService } from '../shared/services/search.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FlyoutModule,
        SelectableListModule,
        MaskModule
    ],
    declarations: [
        AutoCompleteComponent
    ],
    exports: [
        AutoCompleteComponent
    ],
    providers: [
        SearchService
    ]
})
export class AutoCompleteModule {
}
