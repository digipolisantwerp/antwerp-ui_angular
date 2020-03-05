import {Component, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

import {UploadOptions} from '../../types/upload.types';

@Component({
  selector: 'aui-upload-input',
  templateUrl: './upload-input.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: UploadInputComponent,
    multi: true,
  }],
})
export class UploadInputComponent implements ControlValueAccessor {
  @Input() public options: UploadOptions;
  @Input() public format: any;

  public propagateChange = (_: any) => undefined;

  public writeValue(value: any) {
  }

  public registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {
  }

  public onUpload(files) {
    const data = (this.format ? this.format(files) : files);
    this.propagateChange(data);
  }
}
