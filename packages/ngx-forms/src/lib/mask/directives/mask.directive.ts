import {Directive, ElementRef, Input, OnChanges} from '@angular/core';
import Inputmask from 'inputmask';

@Directive({
  selector: '[auiMask]',
})
export class MaskDirective implements OnChanges {
  @Input() public auiMask: string;

  constructor(private ref: ElementRef) {
  }

  public ngOnChanges(): void {
    this.setMask(this.auiMask);
  }

  private setMask(mask): void {
    Inputmask(mask).mask(this.ref.nativeElement);
  }
}
