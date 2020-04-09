import {Component, ContentChild, EventEmitter, Input, Output, TemplateRef} from '@angular/core';

@Component({
  selector: 'aui-selectable-list',
  templateUrl: './selectable-list.component.html',
})
export class SelectableListComponent {
  @Input() public items: any[];
  @Input() public index = 0;
  @Input() public search: string;
  @Input() public label: string;
  @Input() public itemTemplate: TemplateRef<any>;

  @Output() public selected: EventEmitter<any> = new EventEmitter();

  @ContentChild(TemplateRef, {static: true}) public template: TemplateRef<any>;

  public selectItem(item) {
    this.selected.emit(item);
  }

  public formatLabel(input: any) {
    const inputString = (this.label ? input[this.label] : input);

    if (!this.search) {
      return inputString;
    }

    const regEx = new RegExp(this.search, 'ig');
    return inputString.replace(regEx, '<strong>' + this.search + '</strong>');
  }
}
