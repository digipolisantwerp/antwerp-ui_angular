import {
	Component,
	ViewChild,
	TemplateRef,
	OnInit,
	OnDestroy,
	ElementRef,
	AfterContentChecked,
	HostBinding,
	ChangeDetectionStrategy
} from '@angular/core';
import { Menu } from '../../interfaces';
import { Subject, Observable } from 'rxjs';
import { MenuService } from '../../services/menu.service';
import { tap, takeUntil } from 'rxjs/operators';
import { lookForIllegalNodes, select } from '../../services/helpers';

@Component({
	selector: 'aui-sub-menu',
	templateUrl: './sub-menu.component.html',
	styleUrls: ['./sub-menu.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubMenuComponent implements OnInit, OnDestroy, Menu.ChecksChildren, AfterContentChecked {
	private static readonly ALLOWED_CHILDREN = [
		'AUI-SUB-MENU-ITEM',
	];
	/**
	 * Template Reference to allow recursive sub menu templating
	 */
	@ViewChild('subMenuTemplate')
	templateRef: TemplateRef<Menu.ISubMenuContext>;
	@ViewChild('children')
	ngContent: ElementRef<HTMLElement>;
	/**
	 * Helper to display a 'back' link if necessary.
	 * We use a static value io an observable since the
	 * ngIf directive that will use this bool is inclused in
	 * a template and that an observable wouldn't fire in a template.
	 */
	isNestedSubMenu: boolean;

	/**
	 * Helper subject that will emit when the whole submenu gets closed.
	 * If this emits, we should be closing all our submenu items
	 */
	public readonly onClose$ = new Subject<boolean>();

	state$: Observable<Menu.MenuState>;
	configuration: Menu.ModuleConfiguration;
	translations: Menu.Translations;

	@HostBinding('class.docked')
	isDocked: boolean;

	private destroy$ = new Subject();

	public constructor(private menuService: MenuService) {
	}


	ngOnInit() {
		this.translations = this.menuService.translate();
		this.configuration = this.menuService.configuration;
		this.state$ = this.menuService.state$;

		this.state$.pipe(
			select(state => state.docked),
			tap(docked => this.isDocked = docked),
			takeUntil(this.destroy$)
		).subscribe();

		this.menuService.currentMenuIsNestedSubMenu$.pipe(
			takeUntil(this.destroy$),
			tap((v: boolean) => { this.isNestedSubMenu = v; })
		).subscribe();
	}

	ngAfterContentChecked() {
		this.checkChildren();
	}

	public navigateBack() {
		this.menuService.navigateBack();
	}

	checkChildren(): void {
		lookForIllegalNodes(this.ngContent, SubMenuComponent.ALLOWED_CHILDREN);
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
