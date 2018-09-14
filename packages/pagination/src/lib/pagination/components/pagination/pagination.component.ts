import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { PaginationDisplay } from '../../types/pagination.types';

@Component({
	selector: 'aui-pagination',
	templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnChanges {
	@Input() public ariaNavigationLabel = 'Paginering';
	@Input() public ariaPreviousLabel = 'Ga naar de vorige pagina';
	@Input() public ariaNextLabel = 'Ga naar de volgende pagina';
	@Input() public currentPage: number;
	@Input() public display: PaginationDisplay = 'basic';
	@Input() public itemsPerPage: number;
	@Input() public styling = 'outlined';
	@Input() public totalValues: number;
	@Output() public update = new EventEmitter();

	public totalPages = 0;
	public numbers: string[] = [];
	// Use this to have unique ids with multiple pagination instances on one page.
	public instanceId: string = Math.random().toString(36).substr(2, 9);

	public ngOnChanges() {
		this.setValues();
	}

	public next() {
		if (this.currentPage < this.totalPages) {
			this.onUpdate(this.currentPage + 1);
		}
		return false; //  prevent the href being followed
	}

	public prev() {
		if (this.currentPage > 1) {
			this.onUpdate(this.currentPage - 1);
		}
		return false; //  prevent the href being followed
	}

	public onUpdate(i: number|string) {
		const parsedValue = parseInt(i as string, 10); // input from numbers array is a string
		if (parsedValue) {
			this.update.emit(parsedValue);
		}

		return false; //  prevent the href being followed
	}

	private setValues() {
		if (this.totalValues && this.itemsPerPage) {
			this.totalPages = Math.ceil(this.totalValues / this.itemsPerPage);

			const generateNumbers = Array(this.totalPages).fill('').map((e, i) => {
				return String(i + 1);
			});

			if (generateNumbers.length < 8) {
				return this.numbers = generateNumbers;
			}

			if (this.currentPage < 5) {
				this.numbers = generateNumbers.slice(0, 5);
			} else if (this.currentPage > this.totalPages - 4) {
				this.numbers = generateNumbers.slice(this.totalPages - 5);
			} else {
				this.numbers = generateNumbers.slice(this.currentPage - 2, this.currentPage + 1);
			}

			// First page
			if (this.numbers.indexOf('1') === -1) {
				this.numbers.unshift('1');
			}

			// Last Page
			if (this.numbers.indexOf(String(this.totalPages)) === -1) {
				this.numbers.push(String(this.totalPages));
			}

			// Add dots at the beginning
			if (this.numbers.indexOf('2') === -1) {
				this.numbers.splice(1, 0, '...');
			}

			// Add dots at the end
			if (this.numbers.indexOf(String(this.totalPages - 1)) === -1) {
				this.numbers.splice(this.numbers.length - 1, 0, '...');
			}
		}
	}
}
