import { EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { VIEWS } from '../../types/agenda.types';
export declare class NavigationComponent implements OnInit, OnDestroy {
    cssClass: boolean;
    activeDate: string;
    view: VIEWS;
    today: Date;
    navigate: EventEmitter<Date>;
    views: typeof VIEWS;
    navigate$: Subject<Date>;
    private componentDestroyed$;
    ngOnInit(): void;
    ngOnDestroy(): void;
    prev(): void;
    next(): void;
    goToToday(): void;
    changeDate(date: Date, orient: number): void;
    changeDay(date: Date, orient: number): Date;
    changeMonth(date: Date, orient: number): Date;
    changeYear(date: Date, orient: number): Date;
}
