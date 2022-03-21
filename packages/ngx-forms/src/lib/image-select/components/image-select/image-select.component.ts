import { Component, forwardRef, HostBinding, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ImageSelectChoice } from '../../types/image-select.types';

@Component({
  selector: 'aui-image-select',
  templateUrl: './image-select.component.html',
  styleUrls: ['./image-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ImageSelectComponent),
    multi: true,
  }],
})
export class ImageSelectComponent implements ControlValueAccessor, OnInit {
  @Input() public choices: ImageSelectChoice[];
  @Input() public maxSelectable: number | undefined;

  public selectedImageKeys: string[] = [];
  public isDisabled = false;

  public ngOnInit(): void {
    if (this.maxSelectable === undefined) {
      this.maxSelectable = this.choices.length;
    }
  }

  @HostBinding('class.is-max-checked') get maxCheckedClass(): boolean {
    return this.isMaxNumberSelected();
  }

  public updateModel: (_) => any = () => {
  }

  public registerOnChange(onChange: (_) => any): void {
    this.updateModel = onChange;
  }

  public registerOnTouched(): void {
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(value: string[]): void {
    this.selectedImageKeys = Array.isArray(value) ? value : [];
  }

  toggleSelected(choice: ImageSelectChoice, $event: any): void {
    if (this.isSelected(choice)) {
      this.unselect(choice);
    } else if (!this.isMaxNumberSelected()) {
      this.select(choice);
    } else {
      // Uncheck checkbox when max number of selections made
      $event.target.checked = false;
    }
  }

  private isSelected(choice: ImageSelectChoice): boolean {
    return !!this.selectedImageKeys.find(selectedKey => selectedKey === choice.key);
  }

  private isMaxNumberSelected(): boolean {
    return this.selectedImageKeys.length === this.maxSelectable;
  }

  private unselect(choice: ImageSelectChoice): void {
    const index = this.selectedImageKeys.indexOf(choice.key);
    this.selectedImageKeys = [
      ...this.selectedImageKeys.slice(0, index),
      ...this.selectedImageKeys.slice(index + 1),
    ];
    this.updateModel(this.selectedImageKeys);
  }

  private select(choice: ImageSelectChoice): void {
    this.selectedImageKeys = this.selectedImageKeys.concat(choice.key);
    this.updateModel(this.selectedImageKeys);
  }
}
