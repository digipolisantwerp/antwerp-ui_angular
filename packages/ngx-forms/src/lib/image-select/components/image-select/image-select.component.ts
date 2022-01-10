import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ImageSelectChoice } from '../../types/image-select.types';

@Component({
  selector: 'aui-image-select',
  templateUrl: './image-select.component.html',
  styleUrls: [
    './image-select.component.scss',
  ],
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

  toggleSelected(keyOfChoice: string) {
    if (!this.isDisabled) {
      const selected = this.selectedImageKeys.indexOf(keyOfChoice);
      if (selected < 0 && this.selectedImageKeys.length < this.maxSelectable) {
        this.selectedImageKeys = this.selectedImageKeys.concat(keyOfChoice);
        this.updateModel(this.selectedImageKeys);
      } else if (selected >= 0) {
        this.selectedImageKeys = [
          ...this.selectedImageKeys.slice(0, selected),
          ...this.selectedImageKeys.slice(selected + 1),
        ];
        this.updateModel(this.selectedImageKeys);
      }
    }
  }

}
