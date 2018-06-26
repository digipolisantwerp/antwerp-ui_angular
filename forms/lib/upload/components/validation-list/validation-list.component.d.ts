import { InvalidFile } from '../../types/upload.types';
import { ValidationMessagesService } from '../../services/validation-messages.service';
export declare class ValidationListComponent {
    private messagesService;
    invalidFiles: InvalidFile[];
    constructor(messagesService: ValidationMessagesService);
    remove(index: number): void;
    formatReasons(reasons: string[]): string;
}
