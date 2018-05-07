import { async, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe("HeaderComponent", () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeaderComponent,
            ],
        }).compileComponents();
    }));

    it("should update the headerTitle onChanges", () => {
        const fixture = TestBed.createComponent(HeaderComponent);
        const component = fixture.componentInstance;

        component.headerTitle = "Test";

        component.ngOnChanges({
            title: {
                currentValue: "Updated",
            }
        } as any);

        expect(component.headerTitle).toEqual("UPDATED");
    });
});