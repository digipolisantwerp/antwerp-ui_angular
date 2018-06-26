import { EventEmitter, OnChanges, OnInit, SimpleChanges, ElementRef, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { FlyoutDirective, FlyoutZoneDirective } from '@acpaas-ui/ngx-components/flyout';
import { SearchService } from '../../../shared/services/search.service';
export declare class AutoCompleteComponent implements ControlValueAccessor, OnInit, OnChanges {
    private ref;
    private searchService;
    id: string;
    placeholder: string;
    results: any[];
    data: any[];
    remote: boolean;
    minCharacters: number;
    mask: string;
    clearInvalid: boolean;
    searchIncentiveText: string;
    loadingText: string;
    noResultsText: string;
    showAllByDefault: boolean;
    label: string;
    value: string;
    search: EventEmitter<string>;
    select: EventEmitter<any>;
    flyout: FlyoutDirective;
    flyoutZone: FlyoutZoneDirective;
    template: TemplateRef<any>;
    query: string;
    index: number;
    selectedItem: any;
    searching: boolean;
    focused: boolean;
    private remoteValue;
    updateModel: (_: any) => void;
    constructor(ref: ElementRef, searchService: SearchService);
    writeValue(value?: string): any;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    propagateChange(query: string): void;
    /**
     * triggers on input value change
     */
    doSearch(): void;
    /**
     * triggers on selectable-list:select -> onClick event in selectable-list
     */
    onSelect(item: any): void;
    onFlyoutClosed(): void;
    onKeyArrowDown(): void;
    onKeyArrowUp(): void;
    onKeyEnter(event: Event): void;
    onKeyEscape(): void;
    onFocus(): void;
    openFlyout(): void;
    closeFlyout(): void;
    localSearch(): void;
    remoteSearch(): void;
    scrollList(factor: number): void;
}
