import {Component, Input} from '@angular/core';
import {InvalidFile} from '../../types/upload.types';

@Component({
  selector: 'aui-validation-list',
  templateUrl: './validation-list.component.html',
})
export class ValidationListComponent {
  @Input() public invalidFiles: InvalidFile[] = [];
  @Input() public ariaLabelRemove = 'Verwijder';

  public remove(index: number): void {
    this.invalidFiles.splice(index, 1);
  }
}
