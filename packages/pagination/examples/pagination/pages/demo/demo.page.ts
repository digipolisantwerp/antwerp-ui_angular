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
		{ name: 'The Hulk' },
		{ name: 'Deadpool' },
	];
	public visibleHeroes = null;
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
	{ name: 'The Hulk' },
	{ name: 'Deadpool' },
];
public visibleHeroes = null;
public totalValues = this.heroes.length;

public ngOnInit() {
	this.visibleHeroes = this.selectData(this.heroes);
}

public onUpdatePage(page) {
	this.currentPage = page;
	this.visibleHeroes = this.selectData(this.heroes);
}

private selectData(data) {
	return data.slice((this.currentPage * this.itemsPerPage) - this.itemsPerPage, (this.currentPage * this.itemsPerPage));
}`;

	public html = `<aui-pagination
    [currentPage]="currentPage"
    [itemsPerPage]="itemsPerPage"
    [totalValues]="totalValues"
    styling="basic"
    display="numbers"
    (update)="onUpdatePage($event)">
</aui-pagination>`;

	public ngOnInit() {
		this.visibleHeroes = this.selectData(this.heroes);
	}

	public onUpdatePage(page) {
		this.currentPage = page;
		this.visibleHeroes = this.selectData(this.heroes);
	}

	private selectData(data) {
		return data.slice((this.currentPage * this.itemsPerPage) - this.itemsPerPage, (this.currentPage * this.itemsPerPage));
	}
}
