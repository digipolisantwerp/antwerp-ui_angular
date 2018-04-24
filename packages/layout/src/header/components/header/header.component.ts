import {
    Component,
    Input,
} from "@angular/core";

@Component({
    selector: "aui-header",
    templateUrl: "./header.component.html",
})
export class HeaderComponent {
    @Input() public title: string;
}