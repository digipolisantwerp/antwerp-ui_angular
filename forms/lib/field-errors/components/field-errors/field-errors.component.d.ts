import { OnChanges, SimpleChanges } from '@angular/core';
import { FieldErrorDefinition, FieldError } from '../../types/field-errors.types';
export declare class FieldErrorsComponent implements OnChanges {
    errors: FieldError[];
    errorDefinition: FieldErrorDefinition;
    errorMessages: FieldError[];
    ngOnChanges(changes: SimpleChanges): void;
    private getMessage(type, params);
}
