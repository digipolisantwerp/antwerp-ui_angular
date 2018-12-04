export interface Cell {
	data: any;
}

export interface OrderBy {
	key: string;
	order: string;
}

export interface TableRecord {
	any;
}

export type TableColumnFormat = (o: string, key?: string, item?: any) => any;

export interface TableColumn {
	label: string;
	value?: string;
	component?: any;
	headerComponent?: any;
	format?: TableColumnFormat;
	hidden?: boolean;
	disabled?: boolean;
	disableSorting?: boolean;
	classList?: string[];
}
