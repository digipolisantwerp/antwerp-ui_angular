import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { ModalOverlayComponent } from './modal-overlay.component';

const getByCSSQuery = (query, elm, all?) => {
	return all ? elm.querySelectorAll(query) : elm.querySelector(query);
};

@Component({
	selector: 'aui-test',
	template: `
        <aui-modal-overlay>
            <div class="m-modal">
                <span id="insideModal"></span>
            </div>
            <span id="outsideModal"></span>
        </aui-modal-overlay>
    `,
})
class TestComponent {}

const modalMock = {
	instance: {
		closeModal: () => null,
	},
};

describe('Modal - ModalOverlayComponent', () => {
	let comp: TestComponent;
	let fixture: ComponentFixture<TestComponent>;
	let de: DebugElement;
	let overlay: ModalOverlayComponent;

	// async beforeEach
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				ModalOverlayComponent,
				TestComponent,
			],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TestComponent);

		comp = fixture.componentInstance;

		de = fixture.debugElement;

		overlay = de.children[0].componentInstance;

		fixture.detectChanges();

		(overlay as any).modal = modalMock;

		spyOn(modalMock.instance, 'closeModal');
	});

	it('should set the overlay classes on the host element', () => {
		expect(getByCSSQuery('.m-overlay.is-active', de.nativeElement)).toBeDefined();
	});

	it('should do nothing if the modal inside the overlay is clicked', () => {
		const insideModal = getByCSSQuery('#insideModal', de.nativeElement);

		insideModal.click();

		fixture.detectChanges();

		expect(modalMock.instance.closeModal).not.toHaveBeenCalled();
	});

	it('should close the modal if the overlay is clicked', () => {
		const overlayEl = getByCSSQuery('.m-overlay', de.nativeElement);

		overlayEl.click();

		fixture.detectChanges();

		expect(modalMock.instance.closeModal).toHaveBeenCalled();
	});

	it('should close the modal if an element inside the overlay, but outside the modal is clicked', () => {
		const outsideModal = getByCSSQuery('#outsideModal', de.nativeElement);

		outsideModal.click();

		fixture.detectChanges();

		expect(modalMock.instance.closeModal).toHaveBeenCalled();
	});
});
