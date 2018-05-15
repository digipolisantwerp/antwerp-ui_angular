import { Component, Input, Inject } from '@angular/core';
import { InvalidFile } from '../upload/upload.const';

import { ValidationMessagesService } from '../validation-messages/validation-messages.service';

@Component({
    selector: 'aui-validation-list',
    templateUrl: './validation-list.component.html'
})
export class ValidationListComponent {
    @Input() public invalidFiles: InvalidFile[] = [];

    constructor(private messagesService: ValidationMessagesService) {}

    public remove(index) {
        this.invalidFiles.splice(index, 1);
    }

    public formatReasons(reasons: string[]): string {
        const result = [];
        for  (const reason of reasons) {
            result.push(this.messagesService[reason]);
        }
        return result.join(', ');
    }
}
