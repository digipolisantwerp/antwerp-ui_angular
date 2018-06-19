import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { AvatarModule } from "@acpaas-ui/ngx-components/avatar";

import { AVATAR_EXAMPLES_ROUTES } from './avatar.routes';
import { Pages } from './pages/index';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AVATAR_EXAMPLES_ROUTES),
        AvatarModule,
    ],
    declarations: [
        Pages,
	],
})
export class AvatarExamplesModule {}
