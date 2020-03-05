import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[auiSelectableActions]',
  exportAs: 'auiSelectableActions',
})
export class SelectableActionsDirective {
  @Output() public keyArrowUp = new EventEmitter();
  @Output() public keyArrowDown = new EventEmitter();
  @Output() public keyEnter = new EventEmitter();
  @Output() public keyEscape = new EventEmitter();

  @HostListener('keydown', ['$event'])
  public onKeyDown(e: KeyboardEvent) {
    switch (e.key) {
      case 'ArrowUp': // UP
        e.preventDefault(); // Do not change cursor pos
        this.keyArrowUp.emit(e);
        break;
      case 'ArrowDown': // DOWN
        e.preventDefault(); // Do not change cursor pos
        this.keyArrowDown.emit(e);
        break;
      case 'Enter': // ENTER
        this.keyEnter.emit(e);
        break;
      case 'Escape': // ESCAPE
        this.keyEscape.emit(e);
        break;
    }
  }
}
