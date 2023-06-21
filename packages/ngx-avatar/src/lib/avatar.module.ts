import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@acpaas-ui/ngx-icon';
import { AvatarComponent } from './components/avatar/avatar.component';

@NgModule({
  imports: [CommonModule, IconModule],
  declarations: [AvatarComponent],
  exports: [AvatarComponent],
})
export class AvatarModule {}
