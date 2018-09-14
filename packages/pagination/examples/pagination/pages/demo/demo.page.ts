import { Component, OnInit } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})
export class PaginationDemoPageComponent implements OnInit {
	public currentPage = 1;
	public itemsPerPage = 2;
	private heroes = [
		{ name: 'Batman' },
		{ name: 'Superman' },
		{ name: 'Iron man' },
		{ name: 'Wolverine' },
		{ name: 'Wonder woman' },
		{ name: 'Deadpool' },
	];
	public visibleHeroes: any[];
	public itemsPerPageOptions = [1, 2, 4];
	public totalValues = this.heroes.length;

	public javascript1 = `import { PaginationModule } from '@acpaas-ui/ngx-components/pagination';

@NgModule({
	imports: [
		PaginationModule
	]
});

export class AppModule {};`;

	public javascript2 = `public currentPage = 1;
public itemsPerPage = 2;
private heroes = [
	{ name: 'Batman' },
	{ name: 'Superman' },
	{ name: 'Iron man' },
	{ name: 'Wolverine' },
	{ name: 'Wonder woman' },
	{ name: 'Deadpool' }
];
public visibleHeroes: any[];
public totalValues = this.heroes.length;

public ngOnInit() {
	this.selectHeroes();
}

public onUpdatePage(page) {
	this.currentPage = page;
	this.selectHeroes();
}

private selectHeroes() {
	this.visibleHeroes = this.heroes.slice((this.currentPage * this.itemsPerPage)
		- this.itemsPerPage, (this.currentPage * this.itemsPerPage));
}`;

	public html1 = `<aui-pagination
    [currentPage]="currentPage"
    [itemsPerPage]="itemsPerPage"
    [totalValues]="totalValues"
    styling="basic"
    display="numbers"
    (update)="onUpdatePage($event)">
</aui-pagination>`;

	public javascript3 = `import { ItemCounterModule } from '@acpaas-ui/ngx-components/pagination';

@NgModule({
	imports: [
		ItemCounterModule.forChild({
			singular: '%{currentFrom} - %{currentTo} of %{totalAmount} item',
			plural: '%{currentFrom} - %{currentTo} of %{totalAmount} items',
		},
		{
			singular: 'item per page',
			plural: 'items per page',
		})
	]
});

export class AppModule {};`;

	public javascript4 = `public itemsPerPageOptions = [1, 2, 4];

public onUpdateItems(count) {
	this.itemsPerPage = count;
	this.selectHeroes();
}`;

	public html2 = `<aui-items-per-page
	[selectOptions]="itemsPerPageOptions"
	[amountPerPage]="itemsPerPage"
	(returnAmount)="onUpdateItems($event)">
</aui-items-per-page>

<aui-item-counter
	[currentPage]="currentPage"
	[totalAmount]="totalValues"
	[amountPerPage]="itemsPerPage">
</aui-item-counter>`;

	public ngOnInit() {
		this.selectHeroes();
	}

	public onUpdatePage(page) {
		this.currentPage = page;
		this.selectHeroes();
	}

	public onUpdateItems(count) {
		this.itemsPerPage = count;
		this.selectHeroes();
	}

	private selectHeroes() {
		this.visibleHeroes = this.heroes.slice((this.currentPage * this.itemsPerPage)
			- this.itemsPerPage, (this.currentPage * this.itemsPerPage));
	}
}
