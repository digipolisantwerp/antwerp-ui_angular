import {
    Component,
    Input,
    OnChanges,
    SimpleChanges,
} from "@angular/core";
import { pathOr } from "ramda";
import { toUpperCase } from "@acpaas-ui/ngx-utils";

@Component({
    selector: "aui-header",
    templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnChanges {
    @Input() public title: string;

    public headerTitle: string;

    public ngOnChanges(changes: SimpleChanges): void {
        const newTitle = pathOr("", ["title", "currentValue"], changes);

        this.headerTitle = toUpperCase(newTitle);
    }
}