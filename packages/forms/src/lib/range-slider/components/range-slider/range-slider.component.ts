import { Component, Input, HostBinding, HostListener, ElementRef, ViewChild, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor,  NG_VALUE_ACCESSOR } from '@angular/forms';

import { RangeSliderRange } from '../../types/range-slider.types';

@Component({
	selector: 'aui-range-slider',
	templateUrl: './range-slider.component.html',
	styleUrls: [
		'./range-slider.component.scss',
	],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => RangeSliderComponent), // tslint:disable-line
			multi: true,
		},
	],
})
export class RangeSliderComponent implements OnInit, ControlValueAccessor {
	@HostBinding('class.m-range-slider') core_branding = true;

	@Input() public min = 0;
	@Input() public max = 100;
	@Input() public minimalDistance = 1;
	@Input() public step = 0;
	@Input() public labelBefore = '';
	@Input() public labelAfter = '';

	public start = 0;
	public end: (number | boolean) = false;
	public steps = [];
	public startPercentage;
	public endPercentage;
	public active = null;

	constructor(private elRef: ElementRef) {}

	public propagateChange = (value: number|RangeSliderRange) => {};

	public ngOnInit() {
		if (this.step > 0) {
			for (let i = 0; i <= this.max; i += Number(this.step)) {
				this.steps.push(i);
			}
		}

		this.startPercentage = this.startToPercentage();

		if (this.end) {
			this.endPercentage = this.endToPercentage();
		}
	}

	public writeValue(value: any) {
		if (value && value.start) {
			this.start = value.start;
		} else if (!isNaN(value) && value !== '') {
			this.start = Number(value);
		} else {
			this.setStart(Number(this.min));
		}

		this.startPercentage = this.startToPercentage();

		if (value && value.end) {
			this.end = value.end;
			this.endPercentage = this.endToPercentage();
		}
	}

	public registerOnTouched() {}

	public registerOnChange(fn) {
		this.propagateChange = fn;
	}

	public onMouseDown(handle) {
		this.active = handle;
	}

	@HostListener('touchend', ['$event'])
	@HostListener('mouseup', ['$event'])
	public onMouseUp(event) {
		if (this.active === 'start') {
			this.setStart(this.round(this.start, this.step, 0));
			this.startPercentage = this.startToPercentage();
		}

		if (this.active === 'end') {
			this.setEnd(this.round(this.end, this.step, 0));
			this.endPercentage = this.endToPercentage();
		}

		this.active = null;
	}

	@HostListener('touchmove', ['$event'])
	@HostListener('mousemove', ['$event'])
	public onMouseMove(event: MouseEvent | TouchEvent) {
		if (!this.active) {
			return;
		}

		event.preventDefault(); // Do not select text while sliding

		const x = (event as MouseEvent).x !== undefined ? (event as MouseEvent).x : (event as TouchEvent).targetTouches[0].pageX;
		const rect = this.elRef.nativeElement.getBoundingClientRect();
		const newPercentage = this.calcPercentage(x, rect.width, rect.left);
		this.updateHandle(newPercentage);
	}

	public updateHandle(newPercentage) {
		if (this.active === 'start') {
			this.startPercentage = newPercentage;
			this.setStart(this.percentageToStart());

			if (this.minimalDistanceNotRespected()) {
				this.setStart(Number(this.end) - Number(this.minimalDistance));
				this.startPercentage = this.startToPercentage();
			}
		}

		if (this.active === 'end' && this.endPercentage) {
			this.endPercentage = newPercentage;
			this.setEnd(this.percentageToEnd());

			if (this.minimalDistanceNotRespected()) {
				this.setEnd(Number(this.start) + Number(this.minimalDistance));
				this.endPercentage = this.endToPercentage();
			}
		}
	}

	// ---------- HELPERS ---------- //
	public setStart(value) {
		this.start = value;

		if (this.end) {
			this.propagateChange({
				start: this.start,
				end: this.end,
			} as RangeSliderRange);
		} else {
			this.propagateChange(this.start);
		}
	}

	public setEnd(value) {
		this.end = value;

		this.propagateChange({
			start: this.start,
			end: this.end,
		} as RangeSliderRange);
	}

	public round(number, increment, offset) {
		if (increment > 0) {
			return Math.round((number - offset) / increment ) * increment + offset;
		}

		return number;
	}

	public startToPercentage() {
			return Math.round((this.start - this.min) / (this.max - this.min) * 100);
	}

	public percentageToStart() {
		return Math.round((this.startPercentage / 100) * (this.max - this.min) + Number(this.min));
	}

	public endToPercentage() {
			return Math.round((Number(this.end) - this.min) / (this.max - this.min) * 100);
	}

	public percentageToEnd() {
		return Math.round((this.endPercentage / 100) * (this.max - this.min) + Number(this.min));
	}

	public minimalDistanceNotRespected() {
		return this.minimalDistance >= 0 && this.end && this.start > Number(this.end) - this.minimalDistance;
	}

	public calcPercentage(mouseX, width, offsetLeft) {
		const mousePos = mouseX - offsetLeft;

		let newPercentage = Math.round((mousePos / width) * 100);

		if (newPercentage > 100) {
			newPercentage = 100;
		}

		if (newPercentage < 0) {
			newPercentage = 0;
		}

		return newPercentage;
	}
}
