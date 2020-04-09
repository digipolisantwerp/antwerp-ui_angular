import {Component, EventEmitter, forwardRef, HostBinding, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

import {WYSIWYG_DEFAULT_CONFIG} from '../../wysiwyg.conf';

@Component({
  selector: 'aui-wysiwyg',
  templateUrl: './wysiwyg.component.html',
  styleUrls: [
    './wysiwyg.component.scss',
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => WysiwygComponent), // tslint:disable-line:no-forward-ref
    multi: true,
  }],
})
export class WysiwygComponent implements OnInit, ControlValueAccessor {
  @HostBinding('class.aui-wysiwyg') setClass = true;

  @Input() additionalStyling: string[];
  @Input() availableTags: string;
  @Input() basic = false;
  @Input() uiColour: string;
  @Input() customConfig: any;
  @Input() debounce: number;

  @Output() emitContent: EventEmitter<string> = new EventEmitter();
  @Output() focus: EventEmitter<string> = new EventEmitter();
  @Output() blur: EventEmitter<string> = new EventEmitter();

  public ckeditorContent: string;
  public ckeditorConfig = WYSIWYG_DEFAULT_CONFIG;
  public isDisabled = false;

  // NG_VALUE_ACCESSOR_INTERFACE
  public writeValue(value: string): void {
    this.ckeditorContent = value;
    this.updateModel(value);
    this.emitContent.emit(this.ckeditorContent);
  }

  public onFocus(value: string): void {
    this.focus.emit(value);
  }

  public onBlur(value: string): void {
    this.blur.emit(value);
  }

  public registerOnChange(onChange: () => void): void {
    this.updateModel = onChange;
  }

  public registerOnTouched(): void {
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public ngOnInit() {
    this.setConfig();
  }

  private updateModel = (...args: any[]) => undefined;

  private setConfig(): void {
    if (this.customConfig) {
      this.ckeditorConfig = this.customConfig;
    } else {
      if (this.basic) {
        this.ckeditorConfig.toolbar = 'Basic';
      }

      if (this.availableTags) {
        this.ckeditorConfig.format_tags = this.availableTags;
      }

      if (this.uiColour) {
        this.ckeditorConfig.uiColor = this.uiColour;
      }

      if (this.additionalStyling) {
        this.ckeditorConfig.contentsCss.concat(this.additionalStyling);
      }
    }
  }
}
