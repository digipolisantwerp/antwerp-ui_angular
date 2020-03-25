import {Component, ElementRef, forwardRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

import {RangeSliderRange} from '../../types/range-slider.types';

@Component({
  selector: 'aui-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: [
    './range-slider.component.scss',
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RangeSliderComponent), // tslint:disable-line
      multi: true,
    },
  ],
})
export class RangeSliderComponent implements OnInit, ControlValueAccessor {
  @HostBinding('class.m-range-slider') coreBranding = true;
  @Input() public min = 0;
  @Input() public max = 100;
  @Input() public minimalDistance = 1;
  @Input() public step = 0;
  @Input() public labelBefore = '';
  @Input() public labelAfter = '';
  public start = 0;
  public end: (number | boolean) = false;
  public steps = [];
  public startPercentage;
  public endPercentage;
  public active = null;
  public isDisabled = false;
  public hasFocus = false;
  public click = false;

  constructor(private elRef: ElementRef) {
  }

  @HostBinding('class.is-disabled') get disabledClass() {
    return this.isDisabled;
  }

  public propagateChange = (value: number | RangeSliderRange) => {
  }

  public ngOnInit() {
    if (this.step > 0) {
      for (let i = 0; i <= this.max; i += Number(this.step)) {
        this.steps.push(i);
      }
    }

    this.startPercentage = this.startToPercentage();

    if (this.end) {
      this.endPercentage = this.endToPercentage();
    }
  }

  public writeValue(value: any) {
    if (value && value.start) {
      this.start = value.start;
    } else if (!isNaN(value) && value !== '') {
      this.start = Number(value);
    } else {
      this.setStart(Number(this.min));
    }

    this.startPercentage = this.startToPercentage();

    if (value && value.end) {
      this.end = value.end;
      this.endPercentage = this.endToPercentage();
    }
  }

  public registerOnTouched() {
  }

  public registerOnChange(fn) {
    this.propagateChange = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public onMouseDown(handle) {
    if (this.isDisabled) {
      return;
    }

    this.hasFocus = true;
    this.active = handle;
  }

  public toggleFocus(hasFocus, element, $event) {
    if (this.isDisabled) {
      return;
    }

    $event.preventDefault();
    this.hasFocus = hasFocus;
    this.active = element;
  }

  @HostListener('document:keydown', ['$event'])
  public onKeyDown($event) {
    if (!this.hasFocus) {
      return;
    }

    const key = $event.keyCode;
    const keyCodes = {
      end: 35,
      home: 36,
      left: 37,
      up: 38,
      right: 39,
      down: 40,
    };

    if (Object.keys(keyCodes).map(e => keyCodes[e]).indexOf(key) === -1) {
      return;
    }
    let increment = this.minimalDistance;

    if (this.step > 0) {
      increment = Number(this.step);
    }

    const processValue = (dir) => {
      let newValue = (this.active === 'start' ? this.start : Number(this.end));
      if (dir === 'up') {
        newValue += increment;
      } else {
        newValue -= increment;
      }
      let newPercentage = (newValue - this.min) / (this.max - this.min) * 100;

      if (newPercentage > 100) {
        newPercentage = 100;
      }
      if (newPercentage < 0) {
        newPercentage = 0;
      }
      return newPercentage;
    };

    switch (key) {
      case keyCodes.right:
      case keyCodes.up:
        this.updateHandle(processValue('up'));
        $event.preventDefault();
        break;
      case keyCodes.left:
      case keyCodes.down:
        this.updateHandle(processValue('down'));
        $event.preventDefault();
        break;
      case keyCodes.end:
        this.updateHandle(100);
        $event.preventDefault();
        break;
      case keyCodes.home:
        this.updateHandle(0);
        $event.preventDefault();
        break;
    }

  }

  @HostListener('touchend', ['$event'])
  @HostListener('mouseup', ['$event'])
  public onMouseUp(event) {
    if (this.active === 'start') {
      this.setStart(this.round(this.start, this.step, 0));
      this.startPercentage = this.startToPercentage();
    }

    if (this.active === 'end') {
      this.setEnd(this.round(this.end, this.step, 0));
      this.endPercentage = this.endToPercentage();
    }
    this.click = false;
  }

  @HostListener('touchstart', ['$event'])
  @HostListener('mousedown', ['$event'])
  mouseDown(event) {
    this.click = true;
  }

  @HostListener('touchmove', ['$event'])
  @HostListener('mousemove', ['$event'])
  public onMouseMove(event: MouseEvent | TouchEvent) {
    if (!this.active || !this.click) {
      return;
    }

    event.preventDefault(); // Do not select text while sliding

    const x = (event as MouseEvent).x !== undefined ? (event as MouseEvent).x : (event as TouchEvent).targetTouches[0].pageX;
    const rect = this.elRef.nativeElement.getBoundingClientRect();
    const newPercentage = this.calcPercentage(x, rect.width, rect.left);
    this.updateHandle(newPercentage);
  }

  public updateHandle(newPercentage) {
    if (this.active === 'start') {
      this.startPercentage = newPercentage;
      this.setStart(this.percentageToStart());

      if (this.minimalDistanceNotRespected()) {
        this.setStart(Number(this.end) - Number(this.minimalDistance));
        this.startPercentage = this.startToPercentage();
      }
    }

    if (this.active === 'end' && this.endPercentage) {
      this.endPercentage = newPercentage;
      this.setEnd(this.percentageToEnd());

      if (this.minimalDistanceNotRespected()) {
        this.setEnd(Number(this.start) + Number(this.minimalDistance));
        this.endPercentage = this.endToPercentage();
      }
    }
  }

  // ---------- HELPERS ---------- //
  public setStart(value) {
    this.start = value;

    if (this.end) {
      this.propagateChange({
        start: this.start,
        end: this.end,
      } as RangeSliderRange);
    } else {
      this.propagateChange(this.start);
    }
  }

  public setEnd(value) {
    this.end = value;

    this.propagateChange({
      start: this.start,
      end: this.end,
    } as RangeSliderRange);
  }

  public round(n, increment, offset) {
    if (increment > 0) {
      return Math.round((n - offset) / increment) * increment + offset;
    }

    return n;
  }

  public startToPercentage() {
    return Math.round((this.start - this.min) / (this.max - this.min) * 100);
  }

  public percentageToStart() {
    return Math.round((this.startPercentage / 100) * (this.max - this.min) + Number(this.min));
  }

  public endToPercentage() {
    return Math.round((Number(this.end) - this.min) / (this.max - this.min) * 100);
  }

  public percentageToEnd() {
    return Math.round((this.endPercentage / 100) * (this.max - this.min) + Number(this.min));
  }

  public minimalDistanceNotRespected() {
    return this.minimalDistance >= 0 && this.end && this.start > Number(this.end) - this.minimalDistance;
  }

  public calcPercentage(mouseX, width, offsetLeft) {
    const mousePos = mouseX - offsetLeft;

    let newPercentage = Math.round((mousePos / width) * 100);

    if (newPercentage > 100) {
      newPercentage = 100;
    }

    if (newPercentage < 0) {
      newPercentage = 0;
    }

    return newPercentage;
  }
}
