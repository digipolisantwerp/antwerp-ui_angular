import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';
import { FieldError } from '../../types/field-errors.types';

@Component({
    selector: 'aui-field-error',
    templateUrl: './field-error.component.html',
    styleUrls: ['./field-error.component.scss']
})
export class FieldErrorComponent {
    @Input() public error: FieldError;
}
