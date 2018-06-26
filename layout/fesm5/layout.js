import { InjectionToken, Inject, Injectable, NgModule, Component, Input, ChangeDetectionStrategy, Directive, ContentChild, ChangeDetectorRef, HostBinding, PLATFORM_ID, ElementRef, Output, EventEmitter } from '@angular/core';
import { WINDOW, WindowModule } from '@acpaas-ui/ngx-components/utils';
import { merge, get } from 'lodash-es';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import 'cookieconsent';
import { __spread } from 'tslib';
import { Headroom } from '@jsprds/headroom.ts';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ DEFAULT_CONSENT_CONFIG = {
    autoInit: true,
    content: {
        message: 'We make use of cookies to ensure you get the best experience on our website.',
        dismiss: 'OK',
        link: 'Learn more',
        href: 'http://cookiepedia.co.uk/all-about-cookies',
    },
    cookie: {
        name: 'cookieconsent_status',
        path: '/',
        domain: '',
        expiryDays: 365,
    },
    elements: {
        messagelink: '<p id="cookieconsent:desc">{{message}} <a aria-label="learn more about cookies" tabindex="0" href="{{href}}" target="_blank">{{link}}</a></p>',
        // tslint:disable-line:max-line-length
        dismiss: '<button aria-label="dismiss cookie message" tabindex="0" class="a-button cc-btn cc-dismiss">{{dismiss}}</button>',
    },
};
var /** @type {?} */ COOKIE_CONSENT_CONFIG_ROOT = new InjectionToken('cookieConsentConfigRoot');
var /** @type {?} */ COOKIE_CONSENT_CONFIG = new InjectionToken('cookieConsentConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CookieconsentService = /** @class */ (function () {
    function CookieconsentService(cookieConsentConfig, $window) {
        this.cookieConsentConfig = cookieConsentConfig;
        this.$window = $window;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    CookieconsentService.prototype.init = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = this.cookieConsentConfig; }
        if (!config || Object.keys(config).length === 0) {
            config = DEFAULT_CONSENT_CONFIG;
        }
        if (CookieconsentService.initialized) {
            return console.warn('Cookie consent is already initialized!');
        }
        if (!this.$window || (this.$window && !this.$window.cookieconsent)) {
            return console.warn('Cookie consent is not loaded!');
        }
        this.$window.cookieconsent.initialise(merge(this.cookieConsentConfig, config));
    };
    CookieconsentService.initialized = false;
    CookieconsentService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CookieconsentService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [COOKIE_CONSENT_CONFIG,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [WINDOW,] }] }
    ]; };
    return CookieconsentService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} cookieConsentConfig
 * @return {?}
 */
function setConfig(cookieConsentConfig) {
    return merge(DEFAULT_CONSENT_CONFIG, cookieConsentConfig);
}
var ɵ0 = DEFAULT_CONSENT_CONFIG;
var CookieconsentModule = /** @class */ (function () {
    function CookieconsentModule(config, cookieconsentService) {
        if (config === void 0) { config = DEFAULT_CONSENT_CONFIG; }
        this.cookieconsentService = cookieconsentService;
        if (config.autoInit) {
            this.cookieconsentService.init();
        }
    }
    /**
     * @param {?} cookieConsentConfig
     * @return {?}
     */
    CookieconsentModule.forRoot = /**
     * @param {?} cookieConsentConfig
     * @return {?}
     */
    function (cookieConsentConfig) {
        return {
            ngModule: CookieconsentModule,
            providers: [
                { provide: COOKIE_CONSENT_CONFIG_ROOT, useValue: cookieConsentConfig },
                // Merge the forRoot config with our default config (AOT proof)
                {
                    provide: COOKIE_CONSENT_CONFIG,
                    useFactory: setConfig,
                    deps: [COOKIE_CONSENT_CONFIG_ROOT],
                },
                CookieconsentService,
            ],
        };
    };
    CookieconsentModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        WindowModule,
                    ],
                    providers: [
                        CookieconsentService,
                        { provide: COOKIE_CONSENT_CONFIG, useValue: ɵ0 },
                    ],
                },] },
    ];
    /** @nocollapse */
    CookieconsentModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [COOKIE_CONSENT_CONFIG,] }] },
        { type: CookieconsentService }
    ]; };
    return CookieconsentModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CopyrightComponent = /** @class */ (function () {
    function CopyrightComponent() {
        this.currentYear = new Date().getFullYear();
    }
    CopyrightComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-copyright',
                    template: "<span>&copy; {{ currentYear }} {{ domain }}</span>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    CopyrightComponent.propDecorators = {
        domain: [{ type: Input }]
    };
    return CopyrightComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FooterContentDirective = /** @class */ (function () {
    function FooterContentDirective() {
    }
    FooterContentDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[auiFooterContent]',
                },] },
    ];
    return FooterContentDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FooterComponent = /** @class */ (function () {
    function FooterComponent(ref) {
        this.ref = ref;
        this.isExtended = false;
    }
    /**
     * @return {?}
     */
    FooterComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ hasCols = this.footerContent !== undefined;
        var /** @type {?} */ shouldUpdate = hasCols !== this.isExtended;
        if (shouldUpdate) {
            this.isExtended = hasCols;
            this.ref.markForCheck();
        }
    };
    FooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-footer',
                    template: "<footer class=\"aui-footer\" [ngClass]=\"{'extended': isExtended}\">\n    <ng-content select=\"[auiFooterContent]\"></ng-content>\n    <ng-content select=\"[auiFooterBottom]\"></ng-content>\n</footer>\n",
                    styles: [":host{display:block}"],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    FooterComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    FooterComponent.propDecorators = {
        footerContent: [{ type: ContentChild, args: [FooterContentDirective,] }]
    };
    return FooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SubFooterComponent = /** @class */ (function () {
    function SubFooterComponent() {
        this.goToTop = function () {
            window.scrollTo(0, 0);
        };
    }
    SubFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-subfooter',
                    template: "<div class=\"o-footer\">\n    <div class=\"o-footer__label\">\n        <ng-content></ng-content>\n    </div>\n\n    <button class=\"o-footer__button a-button a-button--secondary has-icon\" (click)=\"goToTop()\">\n        <span class=\"fa fa-arrow-up\"></span>\n    </button>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    return SubFooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components = [
    CopyrightComponent,
    FooterComponent,
    SubFooterComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FooterBottomDirective = /** @class */ (function () {
    function FooterBottomDirective() {
    }
    FooterBottomDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[auiFooterBottom]',
                },] },
    ];
    return FooterBottomDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Directives = [
    FooterBottomDirective,
    FooterContentDirective,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: __spread(Components, Directives),
                    exports: __spread(Components, Directives),
                },] },
    ];
    return FooterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeaderLogoDirective = /** @class */ (function () {
    function HeaderLogoDirective() {
    }
    HeaderLogoDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[auiHeaderLogo]',
                },] },
    ];
    return HeaderLogoDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeaderContentDirective = /** @class */ (function () {
    function HeaderContentDirective() {
        this.styleDisplay = 'block';
        this.styleHeight = '100%';
    }
    HeaderContentDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[auiHeaderContent]',
                },] },
    ];
    HeaderContentDirective.propDecorators = {
        styleDisplay: [{ type: HostBinding, args: ['style.display',] }],
        styleHeight: [{ type: HostBinding, args: ['style.height',] }]
    };
    return HeaderContentDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(platformId, elementRef, ref) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.ref = ref;
        this.hasLogo = false;
        this.hasContent = false;
    }
    /**
     * @return {?}
     */
    HeaderComponent.prototype.setupHeadroom = /**
     * @return {?}
     */
    function () {
        // @todo: use headroom options from injector
        var /** @type {?} */ element = this.elementRef.nativeElement.querySelector('.aui-header');
        var /** @type {?} */ head = new Headroom(element);
        return head;
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
            this.setupHeadroom();
        }
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ hasLogo = this.logo !== undefined;
        var /** @type {?} */ hasContent = this.content !== undefined;
        var /** @type {?} */ shouldUpdate = hasLogo !== this.hasLogo || hasContent !== this.hasContent;
        if (shouldUpdate) {
            this.hasLogo = hasLogo;
            this.hasContent = hasContent;
            this.ref.markForCheck();
        }
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-header',
                    template: "<header class=\"o-header o-header--fixed aui-header\" [ngClass]=\"{'has-logo': hasLogo}\">\n    <ng-content select=\"[auiHeaderLogo]\"></ng-content>\n\n    <div class=\"aui-header__content-wrapper\">\n        <div class=\"aui-header__content\">\n            <ng-content select=\"[auiHeaderContent]\"></ng-content>\n        </div>\n\n        <div class=\"aui-header__menu-items\">\n            <ng-content select=\"[auiHeaderMenuItem]\"></ng-content>\n        </div>\n    </div>\n</header>\n",
                    styles: [":host{display:block}.aui-header{transition:-webkit-transform .25s ease-in-out;transition:transform .25s ease-in-out;transition:transform .25s ease-in-out,-webkit-transform .25s ease-in-out;will-change:transform}.aui-header.header--pinned{top:0}.aui-header.header--unpinned{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.aui-header.has-logo.header--unpinned{-webkit-transform:translateY(-300%);transform:translateY(-300%)}.aui-header .aui-header__content-wrapper{display:flex;flex-wrap:wrap;justify-content:flex-end;height:100%}.aui-header .aui-header__content{flex:1;height:100%}.aui-header .aui-header__menu-items{display:flex;justify-content:flex-end}"],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    HeaderComponent.propDecorators = {
        logo: [{ type: ContentChild, args: [HeaderLogoDirective,] }],
        content: [{ type: ContentChild, args: [HeaderContentDirective,] }]
    };
    return HeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeaderMenuItemDirective = /** @class */ (function () {
    function HeaderMenuItemDirective() {
    }
    HeaderMenuItemDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[auiHeaderMenuItem]',
                },] },
    ];
    return HeaderMenuItemDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components$1 = [
    HeaderComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Directives$1 = [
    HeaderContentDirective,
    HeaderLogoDirective,
    HeaderMenuItemDirective,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: __spread(Components$1, Directives$1),
                    exports: __spread(Components$1, Directives$1),
                },] },
    ];
    return HeaderModule;
}()); // @todo: add forroot with headroom options

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ HEADROOMOPTIONS = {
    offset: 200,
    tolerance: 5,
    classes: {
        initial: '',
        pinned: 'header--pinned',
        unpinned: 'header--unpinned',
        top: 'header--top',
        notTop: 'header--not-top',
        bottom: 'header--bottom',
        botBottom: 'header--not-bottom',
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeroCtaDirective = /** @class */ (function () {
    function HeroCtaDirective() {
        this.class = 'aui-hero-cta';
    }
    HeroCtaDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[auiHeroCta]',
                },] },
    ];
    HeroCtaDirective.propDecorators = {
        class: [{ type: HostBinding }]
    };
    return HeroCtaDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
    }
    HeroComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-hero',
                    template: "<div class=\"inner\" [ngClass]=\"{'has-cta': hasCta}\">\n\t<ng-content select=\"[auiHeroCard]\"></ng-content>\n\t<ng-content select=\"[auiHeroCta]\"></ng-content>\n</div>\n",
                    styles: [":host{background:#f3f3f3;border-bottom:1px solid #b0b0b0;min-height:12rem;padding-top:4.5rem}@media screen and (min-width:45rem){:host{padding-top:1.5rem}}:host .buttons{justify-content:center;align-self:center;width:100%}:host .tabs{align-self:flex-end;width:100%;padding-bottom:1.5rem}:host .tabs .tabs-list{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}:host .tabs .tabs-list .tabs-list-item{list-style:none;margin-bottom:-1px;padding:0}@media screen and (min-width:30rem){:host .tabs .tabs-list{flex-direction:row}:host .tabs .tabs-list .tabs-list-item{margin-right:-1px}}:host .tabs .tabs-list .tabs-list-item .tabs-list-item-btn{background:#f3f3f3;border:1px solid #b0b0b0;color:#081f2c;display:block;padding:.375rem 1.5rem;text-align:center;text-decoration:none;transition:background-color .2s ease-out,padding .2s ease-out}:host .tabs .tabs-list .tabs-list-item .tabs-list-item-btn:active:not(.active),:host .tabs .tabs-list .tabs-list-item .tabs-list-item-btn:hover:not(.active),:host .tabs .tabs-list .tabs-list-item .tabs-list-item-btn:visited:not(.active){text-decoration:underline}:host .tabs .tabs-list .tabs-list-item .tabs-list-item-btn.active{background:#fff;font-weight:700}@media screen and (min-width:62rem){:host{padding-top:6rem;display:flex}:host .tabs .tabs-list .tabs-list-item{align-self:flex-end}:host .tabs .tabs-list .tabs-list-item .tabs-list-item-btn.active{padding:.75rem 1.5rem}:host .inner{margin:0;padding:0;max-width:100%;flex:1;align-self:flex-end}:host .inner.has-cta ::ng-deep .aui-hero-card::after,:host .inner.has-cta ::ng-deep .aui-hero-card::before{content:\"\";position:absolute;bottom:-12px;border-top:13px solid rgba(0,0,0,.2)}:host .inner.has-cta ::ng-deep .aui-hero-card::before{border-left:6px solid transparent;left:-.375rem}:host .inner.has-cta ::ng-deep .aui-hero-card::after{border-right:6px solid transparent;right:-.375rem}:host .tabs{padding-bottom:0;justify-content:center}:host .tabs .tabs-list{justify-content:center}:host ::ng-deep .aui-hero-inner{padding:1.5rem}:host ::ng-deep .aui-hero-card,:host ::ng-deep .aui-hero-wrapper{display:block;margin:0 auto;width:100%;max-width:36rem}:host ::ng-deep .aui-hero-card{background-color:#fff;position:relative;text-align:center;padding:1.5rem 1.5rem .75rem}:host ::ng-deep .aui-hero-cta{background-color:#fff;width:100%;text-align:center;min-height:6rem;display:flex;justify-content:center;padding:0}}"],
                },] },
    ];
    HeroComponent.propDecorators = {
        hasCta: [{ type: ContentChild, args: [HeroCtaDirective,] }]
    };
    return HeroComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components$2 = [
    HeroComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeroCardDirective = /** @class */ (function () {
    function HeroCardDirective() {
        this.class = 'aui-hero-card';
    }
    HeroCardDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[auiHeroCard]',
                },] },
    ];
    HeroCardDirective.propDecorators = {
        class: [{ type: HostBinding }]
    };
    return HeroCardDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Directives$2 = [
    HeroCardDirective,
    HeroCtaDirective,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeroModule = /** @class */ (function () {
    function HeroModule() {
    }
    HeroModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        CommonModule,
                    ],
                    declarations: __spread(Components$2, Directives$2),
                    exports: __spread(Components$2, Directives$2),
                },] },
    ];
    return HeroModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PaneComponent = /** @class */ (function () {
    function PaneComponent() {
        this.opened = false;
        this.side = 'left';
        this.backdrop = true;
        this.open = new EventEmitter();
        this.close = new EventEmitter();
    }
    /**
     * @return {?}
     */
    PaneComponent.prototype.togglePane = /**
     * @return {?}
     */
    function () {
        (this.opened ? this.closePane() : this.openPane());
    };
    /**
     * @return {?}
     */
    PaneComponent.prototype.openPane = /**
     * @return {?}
     */
    function () {
        this.opened = true;
        this.open.emit();
    };
    /**
     * @return {?}
     */
    PaneComponent.prototype.closePane = /**
     * @return {?}
     */
    function () {
        this.opened = false;
        this.close.emit();
    };
    PaneComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-pane',
                    template: "<div class=\"m-pane aui-pane\" [ngClass]=\"{ 'm-pane--open': opened, 'm-pane--left': side === 'left', 'm-pane--right': side === 'right' }\">\n\t<ng-content></ng-content>\n</div>\n<div class=\"m-overlay m-overlay__pane is-active\" *ngIf=\"opened && backdrop\" (click)=\"closePane()\"></div>\n",
                    styles: [".m-pane{background-color:#fff;width:22.5rem;height:100%;z-index:100}.m-pane__content{height:100%;overflow-y:scroll}.m-pane--left{position:absolute;left:-22.5rem;transition:left .3s cubic-bezier(.4,0,.2,1)}.m-pane--left.m-pane--open{left:0}.m-pane--right{position:absolute;right:-22.5rem;transition:right .3s cubic-bezier(.4,0,.2,1)}.m-pane--right.m-pane--open{right:0}"],
                },] },
    ];
    PaneComponent.propDecorators = {
        opened: [{ type: Input }],
        side: [{ type: Input }],
        backdrop: [{ type: Input }],
        open: [{ type: Output }],
        close: [{ type: Output }]
    };
    return PaneComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components$3 = [
    PaneComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PaneModule = /** @class */ (function () {
    function PaneModule() {
    }
    PaneModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: __spread(Components$3),
                    exports: __spread(Components$3),
                },] },
    ];
    return PaneModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.closeOnSelected = true;
        this.title = 'Onderweg';
        this.open = false;
        this.items = [];
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
    }
    /**
     * @param {?=} open
     * @return {?}
     */
    SidebarComponent.prototype.toggle = /**
     * @param {?=} open
     * @return {?}
     */
    function (open) {
        if (open === void 0) { open = !this.open; }
        this.open = open;
        if (open) {
            this.opened.emit();
        }
        else {
            this.closed.emit();
        }
    };
    /**
     * @return {?}
     */
    SidebarComponent.prototype.itemClicked = /**
     * @return {?}
     */
    function () {
        if (this.closeOnSelected) {
            this.toggle(false);
        }
    };
    SidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-sidebar',
                    template: "<div class=\"o-sidebar {{ open ? 'o-sidebar--open' : '' }}\">\n\t<div class=\"o-sidebar__header\">\n\t\t<button class=\"a-button a-button-transparent has-icon\" (click)=\"toggle(false)\">\n\t\t\t<i class=\"icon-close\"></i>\n\t\t</button>\n\t\t<h1 class=\"h6\">{{ title | uppercase }}</h1>\n\t</div>\n\t<div class=\"o-sidebar__items\">\n\t\t<aui-sidebar-item *ngFor=\"let item of items\" [item]=\"item\" (click)=\"itemClicked()\"></aui-sidebar-item>\n\t</div>\n\t<ng-content select=\".o-sidebar__footer\"></ng-content>\n</div>\n\n<div class=\"m-overlay\"\n\t*ngIf=\"open\"\n\t(click)=\"toggle(false)\">\n</div>\n",
                    styles: [".m-sidebar{height:100%;overflow:hidden;width:0;background-color:#fff;transition:width .3s cubic-bezier(.4,0,.2,1)}.m-sidebar--open{width:22.5rem}.m-sidebar__content{overflow-x:hidden;overflow-y:auto;width:22.5rem;height:100%}.m-sidebar__content--padding{padding:3rem}"],
                },] },
    ];
    SidebarComponent.propDecorators = {
        closeOnSelected: [{ type: Input }],
        title: [{ type: Input }],
        open: [{ type: Input }],
        items: [{ type: Input }],
        opened: [{ type: Output }],
        closed: [{ type: Output }]
    };
    return SidebarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SidebarItemComponent = /** @class */ (function () {
    function SidebarItemComponent() {
    }
    Object.defineProperty(SidebarItemComponent.prototype, "itemClassList", {
        get: /**
         * @return {?}
         */
        function () {
            return "o-sidebar__item " + get(this.item, 'classList', '');
        },
        enumerable: true,
        configurable: true
    });
    SidebarItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-sidebar-item',
                    template: "<ng-container *ngIf=\"item.href\">\n\t<a href=\"{{item.href}}\" [style.border-color]=\"item.theme?.color\">\n\t\t<img *ngIf=\"item.icon\" src=\"{{item.icon}}\" />\n\t\t<h2 class=\"h5\">{{item.label}}</h2>\n\t</a>\n</ng-container>\n<ng-container *ngIf=\"item.routerLink\">\n\t<a [routerLink]=\"item.routerLink\" [style.border-color]=\"item.theme?.color\">\n\t\t<img *ngIf=\"item.icon\" src=\"{{item.icon}}\" />\n\t\t<h2 class=\"h5\">{{item.label}}</h2>\n\t</a>\n</ng-container>\n\n<ng-container *ngFor=\"let itm of item.items\">\n\t<aui-sidebar-item [item]=\"itm\"></aui-sidebar-item>\n</ng-container>\n",
                },] },
    ];
    SidebarItemComponent.propDecorators = {
        itemClassList: [{ type: HostBinding, args: ['class',] }],
        item: [{ type: Input }]
    };
    return SidebarItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Components$4 = [
    SidebarComponent,
    SidebarItemComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                    ],
                    declarations: [
                        Components$4,
                    ],
                    exports: [
                        Components$4,
                    ],
                },] },
    ];
    return SidebarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { CookieconsentModule, COOKIE_CONSENT_CONFIG, COOKIE_CONSENT_CONFIG_ROOT, DEFAULT_CONSENT_CONFIG, CookieconsentService, FooterModule, CopyrightComponent, FooterComponent, SubFooterComponent, FooterBottomDirective, FooterContentDirective, HeaderComponent, HeaderContentDirective, HeaderLogoDirective, HeaderMenuItemDirective, HeaderModule, HEADROOMOPTIONS, HeroModule, HeroComponent, HeroCardDirective, HeroCtaDirective, PaneModule, PaneComponent, SidebarComponent, SidebarItemComponent, SidebarModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9sYXlvdXQvbGliL2Nvb2tpZS1jb25zZW50L2Nvb2tpZS1jb25zZW50LmNvbmYudHMiLCJuZzovL2xheW91dC9saWIvY29va2llLWNvbnNlbnQvc2VydmljZXMvY29va2llLWNvbnNlbnQuc2VydmljZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9jb29raWUtY29uc2VudC9jb29raWUtY29uc2VudC5tb2R1bGUudHMiLCJuZzovL2xheW91dC9saWIvZm9vdGVyL2NvbXBvbmVudHMvY29weXJpZ2h0L2NvcHlyaWdodC5jb21wb25lbnQudHMiLCJuZzovL2xheW91dC9saWIvZm9vdGVyL2RpcmVjdGl2ZXMvY29udGVudC5kaXJlY3RpdmUudHMiLCJuZzovL2xheW91dC9saWIvZm9vdGVyL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJuZzovL2xheW91dC9saWIvZm9vdGVyL2NvbXBvbmVudHMvc3ViZm9vdGVyL3N1YmZvb3Rlci5jb21wb25lbnQudHMiLCJuZzovL2xheW91dC9saWIvZm9vdGVyL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL2xheW91dC9saWIvZm9vdGVyL2RpcmVjdGl2ZXMvYm90dG9tLmRpcmVjdGl2ZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9mb290ZXIvZGlyZWN0aXZlcy9pbmRleC50cyIsIm5nOi8vbGF5b3V0L2xpYi9mb290ZXIvZm9vdGVyLm1vZHVsZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZWFkZXIvZGlyZWN0aXZlcy9sb2dvLmRpcmVjdGl2ZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZWFkZXIvZGlyZWN0aXZlcy9jb250ZW50LmRpcmVjdGl2ZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZWFkZXIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZWFkZXIvZGlyZWN0aXZlcy9tZW51LWl0ZW0uZGlyZWN0aXZlLnRzIiwibmc6Ly9sYXlvdXQvbGliL2hlYWRlci9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly9sYXlvdXQvbGliL2hlYWRlci9kaXJlY3RpdmVzL2luZGV4LnRzIiwibmc6Ly9sYXlvdXQvbGliL2hlYWRlci9oZWFkZXIubW9kdWxlLnRzIiwibmc6Ly9sYXlvdXQvbGliL2hlYWRlci9oZWFkZXIuY29uZi50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZXJvL2RpcmVjdGl2ZXMvaGVyby1jdGEuZGlyZWN0aXZlLnRzIiwibmc6Ly9sYXlvdXQvbGliL2hlcm8vY29tcG9uZW50cy9oZXJvL2hlcm8uY29tcG9uZW50LnRzIiwibmc6Ly9sYXlvdXQvbGliL2hlcm8vY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZXJvL2RpcmVjdGl2ZXMvaGVyby1jYXJkLmRpcmVjdGl2ZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9oZXJvL2RpcmVjdGl2ZXMvaW5kZXgudHMiLCJuZzovL2xheW91dC9saWIvaGVyby9oZXJvLm1vZHVsZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9wYW5lL2NvbXBvbmVudHMvcGFuZS9wYW5lLmNvbXBvbmVudC50cyIsIm5nOi8vbGF5b3V0L2xpYi9wYW5lL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL2xheW91dC9saWIvcGFuZS9wYW5lLm1vZHVsZS50cyIsIm5nOi8vbGF5b3V0L2xpYi9zaWRlYmFyL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vbGF5b3V0L2xpYi9zaWRlYmFyL2NvbXBvbmVudHMvc2lkZWJhci1pdGVtL3NpZGViYXItaXRlbS5jb21wb25lbnQudHMiLCJuZzovL2xheW91dC9saWIvc2lkZWJhci9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly9sYXlvdXQvbGliL3NpZGViYXIvc2lkZWJhci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvb2tpZUNvbnNlbnRDb25maWcgfSBmcm9tICcuL3R5cGVzL2Nvb2tpZS1jb25zZW50LnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ09OU0VOVF9DT05GSUc6IENvb2tpZUNvbnNlbnRDb25maWcgPSB7XG5cdGF1dG9Jbml0OiB0cnVlLFxuXHRjb250ZW50OiB7XG5cdFx0bWVzc2FnZTogJ1dlIG1ha2UgdXNlIG9mIGNvb2tpZXMgdG8gZW5zdXJlIHlvdSBnZXQgdGhlIGJlc3QgZXhwZXJpZW5jZSBvbiBvdXIgd2Vic2l0ZS4nLFxuXHRcdGRpc21pc3M6ICdPSycsXG5cdFx0bGluazogJ0xlYXJuIG1vcmUnLFxuXHRcdGhyZWY6ICdodHRwOi8vY29va2llcGVkaWEuY28udWsvYWxsLWFib3V0LWNvb2tpZXMnLFxuXHR9LFxuXHRjb29raWU6IHtcblx0XHRuYW1lOiAnY29va2llY29uc2VudF9zdGF0dXMnLFxuXHRcdHBhdGg6ICcvJyxcblx0XHRkb21haW46ICcnLFxuXHRcdGV4cGlyeURheXM6IDM2NSxcblx0fSxcblx0ZWxlbWVudHM6IHtcblx0XHRtZXNzYWdlbGluazogJzxwIGlkPVwiY29va2llY29uc2VudDpkZXNjXCI+e3ttZXNzYWdlfX0gPGEgYXJpYS1sYWJlbD1cImxlYXJuIG1vcmUgYWJvdXQgY29va2llc1wiIHRhYmluZGV4PVwiMFwiIGhyZWY9XCJ7e2hyZWZ9fVwiIHRhcmdldD1cIl9ibGFua1wiPnt7bGlua319PC9hPjwvcD4nLCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm1heC1saW5lLWxlbmd0aFxuXHRcdGRpc21pc3M6ICc8YnV0dG9uIGFyaWEtbGFiZWw9XCJkaXNtaXNzIGNvb2tpZSBtZXNzYWdlXCIgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJhLWJ1dHRvbiBjYy1idG4gY2MtZGlzbWlzc1wiPnt7ZGlzbWlzc319PC9idXR0b24+Jyxcblx0fSxcbn07XG5cbmV4cG9ydCBjb25zdCBDT09LSUVfQ09OU0VOVF9DT05GSUdfUk9PVCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxDb29raWVDb25zZW50Q29uZmlnPignY29va2llQ29uc2VudENvbmZpZ1Jvb3QnKTtcbmV4cG9ydCBjb25zdCBDT09LSUVfQ09OU0VOVF9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48Q29va2llQ29uc2VudENvbmZpZz4oJ2Nvb2tpZUNvbnNlbnRDb25maWcnKTtcbiIsImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy91dGlscyc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2xvZGFzaC1lcyc7XG5cbmltcG9ydCB7IENPT0tJRV9DT05TRU5UX0NPTkZJRywgREVGQVVMVF9DT05TRU5UX0NPTkZJRyB9IGZyb20gJy4uL2Nvb2tpZS1jb25zZW50LmNvbmYnO1xuaW1wb3J0IHsgQ29va2llQ29uc2VudENvbmZpZyB9IGZyb20gJy4uL3R5cGVzL2Nvb2tpZS1jb25zZW50LnR5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvb2tpZWNvbnNlbnRTZXJ2aWNlIHtcblx0cHJpdmF0ZSBzdGF0aWMgaW5pdGlhbGl6ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KENPT0tJRV9DT05TRU5UX0NPTkZJRykgcHJpdmF0ZSBjb29raWVDb25zZW50Q29uZmlnLFxuXHRcdEBJbmplY3QoV0lORE9XKSBwcml2YXRlICR3aW5kb3dcblx0KSB7fVxuXG5cdGluaXQoY29uZmlnOiBDb29raWVDb25zZW50Q29uZmlnID0gdGhpcy5jb29raWVDb25zZW50Q29uZmlnKTogdm9pZCB7XG5cdFx0aWYgKCFjb25maWcgfHwgT2JqZWN0LmtleXMoY29uZmlnKS5sZW5ndGggPT09IDApIHtcblx0XHRcdGNvbmZpZyA9IERFRkFVTFRfQ09OU0VOVF9DT05GSUc7XG5cdFx0fVxuXG5cdFx0aWYgKENvb2tpZWNvbnNlbnRTZXJ2aWNlLmluaXRpYWxpemVkKSB7XG5cdFx0XHRyZXR1cm4gY29uc29sZS53YXJuKCdDb29raWUgY29uc2VudCBpcyBhbHJlYWR5IGluaXRpYWxpemVkIScpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy4kd2luZG93IHx8ICh0aGlzLiR3aW5kb3cgJiYgIXRoaXMuJHdpbmRvdy5jb29raWVjb25zZW50KSkge1xuXHRcdFx0cmV0dXJuIGNvbnNvbGUud2FybignQ29va2llIGNvbnNlbnQgaXMgbm90IGxvYWRlZCEnKTtcblx0XHR9XG5cblx0XHR0aGlzLiR3aW5kb3cuY29va2llY29uc2VudC5pbml0aWFsaXNlKG1lcmdlKHRoaXMuY29va2llQ29uc2VudENvbmZpZywgY29uZmlnKSk7XG5cdH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBXaW5kb3dNb2R1bGUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3V0aWxzJztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCAnY29va2llY29uc2VudCc7XG5cbmltcG9ydCB7IENvb2tpZWNvbnNlbnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb29raWUtY29uc2VudC5zZXJ2aWNlJztcbmltcG9ydCB7IENPT0tJRV9DT05TRU5UX0NPTkZJR19ST09ULCBDT09LSUVfQ09OU0VOVF9DT05GSUcsIERFRkFVTFRfQ09OU0VOVF9DT05GSUcgfSBmcm9tICcuL2Nvb2tpZS1jb25zZW50LmNvbmYnO1xuaW1wb3J0IHsgQ29va2llQ29uc2VudENvbmZpZyB9IGZyb20gJy4vdHlwZXMvY29va2llLWNvbnNlbnQudHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29uZmlnKGNvb2tpZUNvbnNlbnRDb25maWc6IENvb2tpZUNvbnNlbnRDb25maWcpOiBDb29raWVDb25zZW50Q29uZmlnIHtcblx0cmV0dXJuIG1lcmdlKERFRkFVTFRfQ09OU0VOVF9DT05GSUcsIGNvb2tpZUNvbnNlbnRDb25maWcpO1xufVxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFdpbmRvd01vZHVsZSxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Q29va2llY29uc2VudFNlcnZpY2UsXG5cdFx0eyBwcm92aWRlOiBDT09LSUVfQ09OU0VOVF9DT05GSUcsIHVzZVZhbHVlOiBERUZBVUxUX0NPTlNFTlRfQ09ORklHIH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIENvb2tpZWNvbnNlbnRNb2R1bGUge1xuXHRzdGF0aWMgZm9yUm9vdChjb29raWVDb25zZW50Q29uZmlnOiBDb29raWVDb25zZW50Q29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBDb29raWVjb25zZW50TW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHsgcHJvdmlkZTogQ09PS0lFX0NPTlNFTlRfQ09ORklHX1JPT1QsIHVzZVZhbHVlOiBjb29raWVDb25zZW50Q29uZmlnIH0sXG5cblx0XHRcdFx0Ly8gTWVyZ2UgdGhlIGZvclJvb3QgY29uZmlnIHdpdGggb3VyIGRlZmF1bHQgY29uZmlnIChBT1QgcHJvb2YpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm92aWRlOiBDT09LSUVfQ09OU0VOVF9DT05GSUcsXG5cdFx0XHRcdFx0dXNlRmFjdG9yeTogc2V0Q29uZmlnLFxuXHRcdFx0XHRcdGRlcHM6IFtDT09LSUVfQ09OU0VOVF9DT05GSUdfUk9PVF0sXG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Q29va2llY29uc2VudFNlcnZpY2UsXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KENPT0tJRV9DT05TRU5UX0NPTkZJRykgY29uZmlnOiBDb29raWVDb25zZW50Q29uZmlnID0gREVGQVVMVF9DT05TRU5UX0NPTkZJRyxcblx0XHRwcml2YXRlIGNvb2tpZWNvbnNlbnRTZXJ2aWNlOiBDb29raWVjb25zZW50U2VydmljZVxuXHQpIHtcblx0XHRpZiAoY29uZmlnLmF1dG9Jbml0KSB7XG5cdFx0XHR0aGlzLmNvb2tpZWNvbnNlbnRTZXJ2aWNlLmluaXQoKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1jb3B5cmlnaHQnLFxuXHR0ZW1wbGF0ZTogYDxzcGFuPiZjb3B5OyB7eyBjdXJyZW50WWVhciB9fSB7eyBkb21haW4gfX08L3NwYW4+XG5gLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ29weXJpZ2h0Q29tcG9uZW50IHtcblx0QElucHV0KClcblx0ZG9tYWluPzogU3RyaW5nO1xuXG5cdHB1YmxpYyBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYXVpRm9vdGVyQ29udGVudF0nLFxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJDb250ZW50RGlyZWN0aXZlIHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb250ZW50Q2hpbGQsIEFmdGVyQ29udGVudENoZWNrZWQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvb3RlckNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2NvbnRlbnQuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWZvb3RlcicsXG5cdHRlbXBsYXRlOiBgPGZvb3RlciBjbGFzcz1cImF1aS1mb290ZXJcIiBbbmdDbGFzc109XCJ7J2V4dGVuZGVkJzogaXNFeHRlbmRlZH1cIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbYXVpRm9vdGVyQ29udGVudF1cIj48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2F1aUZvb3RlckJvdHRvbV1cIj48L25nLWNvbnRlbnQ+XG48L2Zvb3Rlcj5cbmAsXG5cdHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfWBdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cdEBDb250ZW50Q2hpbGQoRm9vdGVyQ29udGVudERpcmVjdGl2ZSkgZm9vdGVyQ29udGVudDogRm9vdGVyQ29udGVudERpcmVjdGl2ZTtcblx0cHVibGljIGlzRXh0ZW5kZWQ6IEJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuXHRcdGNvbnN0IGhhc0NvbHMgPSB0aGlzLmZvb3RlckNvbnRlbnQgIT09IHVuZGVmaW5lZDtcblx0XHRjb25zdCBzaG91bGRVcGRhdGUgPSBoYXNDb2xzICE9PSB0aGlzLmlzRXh0ZW5kZWQ7XG5cblx0XHRpZiAoc2hvdWxkVXBkYXRlKSB7XG5cdFx0XHR0aGlzLmlzRXh0ZW5kZWQgPSBoYXNDb2xzO1xuXHRcdFx0dGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktc3ViZm9vdGVyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiby1mb290ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiby1mb290ZXJfX2xhYmVsXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cblxuICAgIDxidXR0b24gY2xhc3M9XCJvLWZvb3Rlcl9fYnV0dG9uIGEtYnV0dG9uIGEtYnV0dG9uLS1zZWNvbmRhcnkgaGFzLWljb25cIiAoY2xpY2spPVwiZ29Ub1RvcCgpXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtYXJyb3ctdXBcIj48L3NwYW4+XG4gICAgPC9idXR0b24+XG48L2Rpdj5cbmAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTdWJGb290ZXJDb21wb25lbnQge1xuXHRwdWJsaWMgZ29Ub1RvcCA9ICgpID0+IHtcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG5cdH1cbn1cbiIsImltcG9ydCB7IENvcHlyaWdodENvbXBvbmVudCB9IGZyb20gJy4vY29weXJpZ2h0L2NvcHlyaWdodC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL3N1YmZvb3Rlci9zdWJmb290ZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudHMgPSBbXG5cdENvcHlyaWdodENvbXBvbmVudCxcblx0Rm9vdGVyQ29tcG9uZW50LFxuXHRTdWJGb290ZXJDb21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1thdWlGb290ZXJCb3R0b21dJyxcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyQm90dG9tRGlyZWN0aXZlIHt9XG4iLCJpbXBvcnQgeyBGb290ZXJCb3R0b21EaXJlY3RpdmUgfSBmcm9tICcuL2JvdHRvbS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRm9vdGVyQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vY29udGVudC5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgRGlyZWN0aXZlcyA9IFtcblx0Rm9vdGVyQm90dG9tRGlyZWN0aXZlLFxuXHRGb290ZXJDb250ZW50RGlyZWN0aXZlLFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IERpcmVjdGl2ZXMgfSBmcm9tICcuL2RpcmVjdGl2ZXMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRcdC4uLkRpcmVjdGl2ZXMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRcdC4uLkRpcmVjdGl2ZXMsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIEZvb3Rlck1vZHVsZSB7XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F1aUhlYWRlckxvZ29dJyxcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyTG9nb0RpcmVjdGl2ZSB7fVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXVpSGVhZGVyQ29udGVudF0nLFxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb250ZW50RGlyZWN0aXZlIHtcblx0QEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JykgcHVibGljIHN0eWxlRGlzcGxheSA9ICdibG9jayc7XG5cdEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0JykgcHVibGljIHN0eWxlSGVpZ2h0ID0gJzEwMCUnO1xufVxuIiwiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRPbkluaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb250ZW50Q2hpbGQsXG5cdEFmdGVyQ29udGVudENoZWNrZWQsXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRJbmplY3QsXG5cdFBMQVRGT1JNX0lELFxuXHRFbGVtZW50UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgSGVhZHJvb20gfSBmcm9tICdAanNwcmRzL2hlYWRyb29tLnRzJztcblxuaW1wb3J0IHsgSGVhZGVyTG9nb0RpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvbG9nby5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSGVhZGVyQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvY29udGVudC5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktaGVhZGVyJyxcblx0dGVtcGxhdGU6IGA8aGVhZGVyIGNsYXNzPVwiby1oZWFkZXIgby1oZWFkZXItLWZpeGVkIGF1aS1oZWFkZXJcIiBbbmdDbGFzc109XCJ7J2hhcy1sb2dvJzogaGFzTG9nb31cIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbYXVpSGVhZGVyTG9nb11cIj48L25nLWNvbnRlbnQ+XG5cbiAgICA8ZGl2IGNsYXNzPVwiYXVpLWhlYWRlcl9fY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdWktaGVhZGVyX19jb250ZW50XCI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbYXVpSGVhZGVyQ29udGVudF1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdWktaGVhZGVyX19tZW51LWl0ZW1zXCI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbYXVpSGVhZGVyTWVudUl0ZW1dXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvaGVhZGVyPlxuYCxcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9LmF1aS1oZWFkZXJ7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMjVzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4yNXMgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjI1cyBlYXNlLWluLW91dCwtd2Via2l0LXRyYW5zZm9ybSAuMjVzIGVhc2UtaW4tb3V0O3dpbGwtY2hhbmdlOnRyYW5zZm9ybX0uYXVpLWhlYWRlci5oZWFkZXItLXBpbm5lZHt0b3A6MH0uYXVpLWhlYWRlci5oZWFkZXItLXVucGlubmVkey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMDAlKX0uYXVpLWhlYWRlci5oYXMtbG9nby5oZWFkZXItLXVucGlubmVkey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTMwMCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0zMDAlKX0uYXVpLWhlYWRlciAuYXVpLWhlYWRlcl9fY29udGVudC13cmFwcGVye2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7aGVpZ2h0OjEwMCV9LmF1aS1oZWFkZXIgLmF1aS1oZWFkZXJfX2NvbnRlbnR7ZmxleDoxO2hlaWdodDoxMDAlfS5hdWktaGVhZGVyIC5hdWktaGVhZGVyX19tZW51LWl0ZW1ze2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9YF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudENoZWNrZWQge1xuXHRAQ29udGVudENoaWxkKEhlYWRlckxvZ29EaXJlY3RpdmUpIGxvZ286IEhlYWRlckxvZ29EaXJlY3RpdmU7XG5cdEBDb250ZW50Q2hpbGQoSGVhZGVyQ29udGVudERpcmVjdGl2ZSkgY29udGVudDogSGVhZGVyQ29udGVudERpcmVjdGl2ZTtcblx0cHVibGljIGhhc0xvZ286IEJvb2xlYW4gPSBmYWxzZTtcblx0cHVibGljIGhhc0NvbnRlbnQ6IEJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcblx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0cHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmXG5cdCkge31cblxuXHRwdWJsaWMgc2V0dXBIZWFkcm9vbSgpIHsgLy8gQHRvZG86IHVzZSBoZWFkcm9vbSBvcHRpb25zIGZyb20gaW5qZWN0b3Jcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmF1aS1oZWFkZXInKTtcblx0XHRjb25zdCBoZWFkID0gbmV3IEhlYWRyb29tKGVsZW1lbnQpO1xuXG5cdFx0cmV0dXJuIGhlYWQ7XG5cdH1cblxuXHRwdWJsaWMgbmdPbkluaXQoKSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHRoaXMuc2V0dXBIZWFkcm9vbSgpO1xuXHRcdH1cblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcblx0XHRjb25zdCBoYXNMb2dvID0gdGhpcy5sb2dvICE9PSB1bmRlZmluZWQ7XG5cdFx0Y29uc3QgaGFzQ29udGVudCA9IHRoaXMuY29udGVudCAhPT0gdW5kZWZpbmVkO1xuXHRcdGNvbnN0IHNob3VsZFVwZGF0ZSA9IGhhc0xvZ28gIT09IHRoaXMuaGFzTG9nbyB8fCBoYXNDb250ZW50ICE9PSB0aGlzLmhhc0NvbnRlbnQ7XG5cblx0XHRpZiAoc2hvdWxkVXBkYXRlKSB7XG5cdFx0XHR0aGlzLmhhc0xvZ28gPSBoYXNMb2dvO1xuXHRcdFx0dGhpcy5oYXNDb250ZW50ID0gaGFzQ29udGVudDtcblxuXHRcdFx0dGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F1aUhlYWRlck1lbnVJdGVtXScsXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlck1lbnVJdGVtRGlyZWN0aXZlIHt9XG4iLCJpbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudHMgPSBbXG5cdEhlYWRlckNvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBIZWFkZXJDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9jb250ZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBIZWFkZXJMb2dvRGlyZWN0aXZlIH0gZnJvbSAnLi9sb2dvLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBIZWFkZXJNZW51SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vbWVudS1pdGVtLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBEaXJlY3RpdmVzID0gW1xuXHRIZWFkZXJDb250ZW50RGlyZWN0aXZlLFxuXHRIZWFkZXJMb2dvRGlyZWN0aXZlLFxuXHRIZWFkZXJNZW51SXRlbURpcmVjdGl2ZSxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBEaXJlY3RpdmVzIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XHQuLi5EaXJlY3RpdmVzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XHQuLi5EaXJlY3RpdmVzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJNb2R1bGUge30gLy8gQHRvZG86IGFkZCBmb3Jyb290IHdpdGggaGVhZHJvb20gb3B0aW9uc1xuIiwiZXhwb3J0IGNvbnN0IEhFQURST09NT1BUSU9OUyA9IHtcblx0b2Zmc2V0OiAyMDAsXG5cdHRvbGVyYW5jZTogNSxcblx0Y2xhc3Nlczoge1xuXHRcdGluaXRpYWw6ICcnLFxuXHRcdHBpbm5lZDogJ2hlYWRlci0tcGlubmVkJyxcblx0XHR1bnBpbm5lZDogJ2hlYWRlci0tdW5waW5uZWQnLFxuXHRcdHRvcDogJ2hlYWRlci0tdG9wJyxcblx0XHRub3RUb3A6ICdoZWFkZXItLW5vdC10b3AnLFxuXHRcdGJvdHRvbTogJ2hlYWRlci0tYm90dG9tJyxcblx0XHRib3RCb3R0b206ICdoZWFkZXItLW5vdC1ib3R0b20nLFxuXHR9LFxufTtcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aUhlcm9DdGFdJyxcbn0pXG5leHBvcnQgY2xhc3MgSGVyb0N0YURpcmVjdGl2ZSB7XG5cdEBIb3N0QmluZGluZygpIGNsYXNzID0gJ2F1aS1oZXJvLWN0YSc7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVyb0N0YURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvaGVyby1jdGEuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWhlcm8nLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJpbm5lclwiIFtuZ0NsYXNzXT1cInsnaGFzLWN0YSc6IGhhc0N0YX1cIj5cblx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2F1aUhlcm9DYXJkXVwiPjwvbmctY29udGVudD5cblx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2F1aUhlcm9DdGFdXCI+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLFxuXHRzdHlsZXM6IFtgOmhvc3R7YmFja2dyb3VuZDojZjNmM2YzO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNiMGIwYjA7bWluLWhlaWdodDoxMnJlbTtwYWRkaW5nLXRvcDo0LjVyZW19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo0NXJlbSl7Omhvc3R7cGFkZGluZy10b3A6MS41cmVtfX06aG9zdCAuYnV0dG9uc3tqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLXNlbGY6Y2VudGVyO3dpZHRoOjEwMCV9Omhvc3QgLnRhYnN7YWxpZ24tc2VsZjpmbGV4LWVuZDt3aWR0aDoxMDAlO3BhZGRpbmctYm90dG9tOjEuNXJlbX06aG9zdCAudGFicyAudGFicy1saXN0e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWFyZ2luOjA7cGFkZGluZzowO2xpc3Qtc3R5bGU6bm9uZX06aG9zdCAudGFicyAudGFicy1saXN0IC50YWJzLWxpc3QtaXRlbXtsaXN0LXN0eWxlOm5vbmU7bWFyZ2luLWJvdHRvbTotMXB4O3BhZGRpbmc6MH1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjMwcmVtKXs6aG9zdCAudGFicyAudGFicy1saXN0e2ZsZXgtZGlyZWN0aW9uOnJvd306aG9zdCAudGFicyAudGFicy1saXN0IC50YWJzLWxpc3QtaXRlbXttYXJnaW4tcmlnaHQ6LTFweH19Omhvc3QgLnRhYnMgLnRhYnMtbGlzdCAudGFicy1saXN0LWl0ZW0gLnRhYnMtbGlzdC1pdGVtLWJ0bntiYWNrZ3JvdW5kOiNmM2YzZjM7Ym9yZGVyOjFweCBzb2xpZCAjYjBiMGIwO2NvbG9yOiMwODFmMmM7ZGlzcGxheTpibG9jaztwYWRkaW5nOi4zNzVyZW0gMS41cmVtO3RleHQtYWxpZ246Y2VudGVyO3RleHQtZGVjb3JhdGlvbjpub25lO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1vdXQscGFkZGluZyAuMnMgZWFzZS1vdXR9Omhvc3QgLnRhYnMgLnRhYnMtbGlzdCAudGFicy1saXN0LWl0ZW0gLnRhYnMtbGlzdC1pdGVtLWJ0bjphY3RpdmU6bm90KC5hY3RpdmUpLDpob3N0IC50YWJzIC50YWJzLWxpc3QgLnRhYnMtbGlzdC1pdGVtIC50YWJzLWxpc3QtaXRlbS1idG46aG92ZXI6bm90KC5hY3RpdmUpLDpob3N0IC50YWJzIC50YWJzLWxpc3QgLnRhYnMtbGlzdC1pdGVtIC50YWJzLWxpc3QtaXRlbS1idG46dmlzaXRlZDpub3QoLmFjdGl2ZSl7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX06aG9zdCAudGFicyAudGFicy1saXN0IC50YWJzLWxpc3QtaXRlbSAudGFicy1saXN0LWl0ZW0tYnRuLmFjdGl2ZXtiYWNrZ3JvdW5kOiNmZmY7Zm9udC13ZWlnaHQ6NzAwfUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NjJyZW0pezpob3N0e3BhZGRpbmctdG9wOjZyZW07ZGlzcGxheTpmbGV4fTpob3N0IC50YWJzIC50YWJzLWxpc3QgLnRhYnMtbGlzdC1pdGVte2FsaWduLXNlbGY6ZmxleC1lbmR9Omhvc3QgLnRhYnMgLnRhYnMtbGlzdCAudGFicy1saXN0LWl0ZW0gLnRhYnMtbGlzdC1pdGVtLWJ0bi5hY3RpdmV7cGFkZGluZzouNzVyZW0gMS41cmVtfTpob3N0IC5pbm5lcnttYXJnaW46MDtwYWRkaW5nOjA7bWF4LXdpZHRoOjEwMCU7ZmxleDoxO2FsaWduLXNlbGY6ZmxleC1lbmR9Omhvc3QgLmlubmVyLmhhcy1jdGEgOjpuZy1kZWVwIC5hdWktaGVyby1jYXJkOjphZnRlciw6aG9zdCAuaW5uZXIuaGFzLWN0YSA6Om5nLWRlZXAgLmF1aS1oZXJvLWNhcmQ6OmJlZm9yZXtjb250ZW50OlwiXCI7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOi0xMnB4O2JvcmRlci10b3A6MTNweCBzb2xpZCByZ2JhKDAsMCwwLC4yKX06aG9zdCAuaW5uZXIuaGFzLWN0YSA6Om5nLWRlZXAgLmF1aS1oZXJvLWNhcmQ6OmJlZm9yZXtib3JkZXItbGVmdDo2cHggc29saWQgdHJhbnNwYXJlbnQ7bGVmdDotLjM3NXJlbX06aG9zdCAuaW5uZXIuaGFzLWN0YSA6Om5nLWRlZXAgLmF1aS1oZXJvLWNhcmQ6OmFmdGVye2JvcmRlci1yaWdodDo2cHggc29saWQgdHJhbnNwYXJlbnQ7cmlnaHQ6LS4zNzVyZW19Omhvc3QgLnRhYnN7cGFkZGluZy1ib3R0b206MDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfTpob3N0IC50YWJzIC50YWJzLWxpc3R7anVzdGlmeS1jb250ZW50OmNlbnRlcn06aG9zdCA6Om5nLWRlZXAgLmF1aS1oZXJvLWlubmVye3BhZGRpbmc6MS41cmVtfTpob3N0IDo6bmctZGVlcCAuYXVpLWhlcm8tY2FyZCw6aG9zdCA6Om5nLWRlZXAgLmF1aS1oZXJvLXdyYXBwZXJ7ZGlzcGxheTpibG9jazttYXJnaW46MCBhdXRvO3dpZHRoOjEwMCU7bWF4LXdpZHRoOjM2cmVtfTpob3N0IDo6bmctZGVlcCAuYXVpLWhlcm8tY2FyZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7cG9zaXRpb246cmVsYXRpdmU7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzoxLjVyZW0gMS41cmVtIC43NXJlbX06aG9zdCA6Om5nLWRlZXAgLmF1aS1oZXJvLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcjttaW4taGVpZ2h0OjZyZW07ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZzowfX1gXSxcbn0pXG5leHBvcnQgY2xhc3MgSGVyb0NvbXBvbmVudCB7XG5cdEBDb250ZW50Q2hpbGQoSGVyb0N0YURpcmVjdGl2ZSkgaGFzQ3RhOiBIZXJvQ3RhRGlyZWN0aXZlO1xufVxuIiwiaW1wb3J0IHsgSGVyb0NvbXBvbmVudCB9IGZyb20gJy4vaGVyby9oZXJvLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRIZXJvQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aUhlcm9DYXJkXScsXG59KVxuZXhwb3J0IGNsYXNzIEhlcm9DYXJkRGlyZWN0aXZlIHtcblx0QEhvc3RCaW5kaW5nKCkgY2xhc3MgPSAnYXVpLWhlcm8tY2FyZCc7XG59XG4iLCJpbXBvcnQgeyBIZXJvQ2FyZERpcmVjdGl2ZSB9IGZyb20gJy4vaGVyby1jYXJkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBIZXJvQ3RhRGlyZWN0aXZlIH0gZnJvbSAnLi9oZXJvLWN0YS5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgRGlyZWN0aXZlcyA9IFtcblx0SGVyb0NhcmREaXJlY3RpdmUsXG5cdEhlcm9DdGFEaXJlY3RpdmUsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgRGlyZWN0aXZlcyB9IGZyb20gJy4vZGlyZWN0aXZlcy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRCcm93c2VyTW9kdWxlLFxuXHRcdENvbW1vbk1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XHQuLi5EaXJlY3RpdmVzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XHQuLi5EaXJlY3RpdmVzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBIZXJvTW9kdWxlIHtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1wYW5lJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibS1wYW5lIGF1aS1wYW5lXCIgW25nQ2xhc3NdPVwieyAnbS1wYW5lLS1vcGVuJzogb3BlbmVkLCAnbS1wYW5lLS1sZWZ0Jzogc2lkZSA9PT0gJ2xlZnQnLCAnbS1wYW5lLS1yaWdodCc6IHNpZGUgPT09ICdyaWdodCcgfVwiPlxuXHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtLW92ZXJsYXkgbS1vdmVybGF5X19wYW5lIGlzLWFjdGl2ZVwiICpuZ0lmPVwib3BlbmVkICYmIGJhY2tkcm9wXCIgKGNsaWNrKT1cImNsb3NlUGFuZSgpXCI+PC9kaXY+XG5gLFxuXHRzdHlsZXM6IFtgLm0tcGFuZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7d2lkdGg6MjIuNXJlbTtoZWlnaHQ6MTAwJTt6LWluZGV4OjEwMH0ubS1wYW5lX19jb250ZW50e2hlaWdodDoxMDAlO292ZXJmbG93LXk6c2Nyb2xsfS5tLXBhbmUtLWxlZnR7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotMjIuNXJlbTt0cmFuc2l0aW9uOmxlZnQgLjNzIGN1YmljLWJlemllciguNCwwLC4yLDEpfS5tLXBhbmUtLWxlZnQubS1wYW5lLS1vcGVue2xlZnQ6MH0ubS1wYW5lLS1yaWdodHtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDotMjIuNXJlbTt0cmFuc2l0aW9uOnJpZ2h0IC4zcyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKX0ubS1wYW5lLS1yaWdodC5tLXBhbmUtLW9wZW57cmlnaHQ6MH1gXSxcbn0pXG5leHBvcnQgY2xhc3MgUGFuZUNvbXBvbmVudCB7XG5cdEBJbnB1dCgpIG9wZW5lZCA9IGZhbHNlO1xuXHRASW5wdXQoKSBzaWRlID0gJ2xlZnQnO1xuXHRASW5wdXQoKSBiYWNrZHJvcCA9IHRydWU7XG5cdEBPdXRwdXQoKSBvcGVuID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIHRvZ2dsZVBhbmUoKSB7XG5cdFx0KHRoaXMub3BlbmVkID8gdGhpcy5jbG9zZVBhbmUoKSA6IHRoaXMub3BlblBhbmUoKSk7XG5cdH1cblxuXHRwdWJsaWMgb3BlblBhbmUoKSB7XG5cdFx0dGhpcy5vcGVuZWQgPSB0cnVlO1xuXHRcdHRoaXMub3Blbi5lbWl0KCk7XG5cdH1cblxuXHRwdWJsaWMgY2xvc2VQYW5lKCkge1xuXHRcdHRoaXMub3BlbmVkID0gZmFsc2U7XG5cdFx0dGhpcy5jbG9zZS5lbWl0KCk7XG5cdH1cbn1cbiIsImltcG9ydCB7IFBhbmVDb21wb25lbnQgfSBmcm9tICcuL3BhbmUvcGFuZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0UGFuZUNvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBQYW5lTW9kdWxlIHtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNpZGViYXJJdGVtLCBTaWRlYmFyU3RhdGUgfSBmcm9tICcuLi8uLi90eXBlcy9zaWRlYmFyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXNpZGViYXInLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJvLXNpZGViYXIge3sgb3BlbiA/ICdvLXNpZGViYXItLW9wZW4nIDogJycgfX1cIj5cblx0PGRpdiBjbGFzcz1cIm8tc2lkZWJhcl9faGVhZGVyXCI+XG5cdFx0PGJ1dHRvbiBjbGFzcz1cImEtYnV0dG9uIGEtYnV0dG9uLXRyYW5zcGFyZW50IGhhcy1pY29uXCIgKGNsaWNrKT1cInRvZ2dsZShmYWxzZSlcIj5cblx0XHRcdDxpIGNsYXNzPVwiaWNvbi1jbG9zZVwiPjwvaT5cblx0XHQ8L2J1dHRvbj5cblx0XHQ8aDEgY2xhc3M9XCJoNlwiPnt7IHRpdGxlIHwgdXBwZXJjYXNlIH19PC9oMT5cblx0PC9kaXY+XG5cdDxkaXYgY2xhc3M9XCJvLXNpZGViYXJfX2l0ZW1zXCI+XG5cdFx0PGF1aS1zaWRlYmFyLWl0ZW0gKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIiBbaXRlbV09XCJpdGVtXCIgKGNsaWNrKT1cIml0ZW1DbGlja2VkKClcIj48L2F1aS1zaWRlYmFyLWl0ZW0+XG5cdDwvZGl2PlxuXHQ8bmctY29udGVudCBzZWxlY3Q9XCIuby1zaWRlYmFyX19mb290ZXJcIj48L25nLWNvbnRlbnQ+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cIm0tb3ZlcmxheVwiXG5cdCpuZ0lmPVwib3BlblwiXG5cdChjbGljayk9XCJ0b2dnbGUoZmFsc2UpXCI+XG48L2Rpdj5cbmAsXG5cdHN0eWxlczogW2AubS1zaWRlYmFye2hlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbjt3aWR0aDowO2JhY2tncm91bmQtY29sb3I6I2ZmZjt0cmFuc2l0aW9uOndpZHRoIC4zcyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKX0ubS1zaWRlYmFyLS1vcGVue3dpZHRoOjIyLjVyZW19Lm0tc2lkZWJhcl9fY29udGVudHtvdmVyZmxvdy14OmhpZGRlbjtvdmVyZmxvdy15OmF1dG87d2lkdGg6MjIuNXJlbTtoZWlnaHQ6MTAwJX0ubS1zaWRlYmFyX19jb250ZW50LS1wYWRkaW5ne3BhZGRpbmc6M3JlbX1gXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHB1YmxpYyBjbG9zZU9uU2VsZWN0ZWQgPSB0cnVlO1xuXHRASW5wdXQoKSBwdWJsaWMgdGl0bGUgPSAnT25kZXJ3ZWcnO1xuXHRASW5wdXQoKSBwdWJsaWMgb3BlbiA9IGZhbHNlO1xuXHRASW5wdXQoKSBwdWJsaWMgaXRlbXM6IFNpZGViYXJJdGVtW10gPSBbXTtcblxuXHRAT3V0cHV0KCkgcHVibGljIG9wZW5lZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGNsb3NlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cdHB1YmxpYyB0b2dnbGUob3BlbjogYm9vbGVhbiA9ICF0aGlzLm9wZW4pIHtcblx0XHR0aGlzLm9wZW4gPSBvcGVuO1xuXG5cdFx0aWYgKG9wZW4pIHtcblx0XHRcdHRoaXMub3BlbmVkLmVtaXQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jbG9zZWQuZW1pdCgpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBpdGVtQ2xpY2tlZCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5jbG9zZU9uU2VsZWN0ZWQpIHtcblx0XHRcdHRoaXMudG9nZ2xlKGZhbHNlKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdEhvc3RCaW5kaW5nLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaC1lcyc7XG5cbmltcG9ydCB7IFNpZGViYXJJdGVtIH0gZnJvbSAnLi4vLi4vdHlwZXMvc2lkZWJhci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1zaWRlYmFyLWl0ZW0nLFxuXHR0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLmhyZWZcIj5cblx0PGEgaHJlZj1cInt7aXRlbS5ocmVmfX1cIiBbc3R5bGUuYm9yZGVyLWNvbG9yXT1cIml0ZW0udGhlbWU/LmNvbG9yXCI+XG5cdFx0PGltZyAqbmdJZj1cIml0ZW0uaWNvblwiIHNyYz1cInt7aXRlbS5pY29ufX1cIiAvPlxuXHRcdDxoMiBjbGFzcz1cImg1XCI+e3tpdGVtLmxhYmVsfX08L2gyPlxuXHQ8L2E+XG48L25nLWNvbnRhaW5lcj5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnJvdXRlckxpbmtcIj5cblx0PGEgW3JvdXRlckxpbmtdPVwiaXRlbS5yb3V0ZXJMaW5rXCIgW3N0eWxlLmJvcmRlci1jb2xvcl09XCJpdGVtLnRoZW1lPy5jb2xvclwiPlxuXHRcdDxpbWcgKm5nSWY9XCJpdGVtLmljb25cIiBzcmM9XCJ7e2l0ZW0uaWNvbn19XCIgLz5cblx0XHQ8aDIgY2xhc3M9XCJoNVwiPnt7aXRlbS5sYWJlbH19PC9oMj5cblx0PC9hPlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0bSBvZiBpdGVtLml0ZW1zXCI+XG5cdDxhdWktc2lkZWJhci1pdGVtIFtpdGVtXT1cIml0bVwiPjwvYXVpLXNpZGViYXItaXRlbT5cbjwvbmctY29udGFpbmVyPlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhckl0ZW1Db21wb25lbnQge1xuXHRASG9zdEJpbmRpbmcoJ2NsYXNzJykgcHVibGljIGdldCBpdGVtQ2xhc3NMaXN0KCkge1xuXHRcdHJldHVybiBgby1zaWRlYmFyX19pdGVtICR7Z2V0KHRoaXMuaXRlbSwgJ2NsYXNzTGlzdCcsICcnKX1gO1xuXHR9XG5cdEBJbnB1dCgpIHB1YmxpYyBpdGVtOiBTaWRlYmFySXRlbTtcbn1cbiIsImltcG9ydCB7IFNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZWJhckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NpZGViYXItaXRlbS9zaWRlYmFyLWl0ZW0uY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudHMgPSBbXG5cdFNpZGViYXJDb21wb25lbnQsXG5cdFNpZGViYXJJdGVtQ29tcG9uZW50LFxuXTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Um91dGVyTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRDb21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhck1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnRzIiwiRGlyZWN0aXZlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFHYSxzQkFBc0IsR0FBd0I7SUFDMUQsUUFBUSxFQUFFLElBQUk7SUFDZCxPQUFPLEVBQUU7UUFDUixPQUFPLEVBQUUsOEVBQThFO1FBQ3ZGLE9BQU8sRUFBRSxJQUFJO1FBQ2IsSUFBSSxFQUFFLFlBQVk7UUFDbEIsSUFBSSxFQUFFLDRDQUE0QztLQUNsRDtJQUNELE1BQU0sRUFBRTtRQUNQLElBQUksRUFBRSxzQkFBc0I7UUFDNUIsSUFBSSxFQUFFLEdBQUc7UUFDVCxNQUFNLEVBQUUsRUFBRTtRQUNWLFVBQVUsRUFBRSxHQUFHO0tBQ2Y7SUFDRCxRQUFRLEVBQUU7UUFDVCxXQUFXLEVBQUUsK0lBQStJOztRQUM1SixPQUFPLEVBQUUsa0hBQWtIO0tBQzNIO0NBQ0QsQ0FBQztBQUVGLHFCQUFhLDBCQUEwQixHQUFHLElBQUksY0FBYyxDQUFzQix5QkFBeUIsQ0FBQyxDQUFDO0FBQzdHLHFCQUFhLHFCQUFxQixHQUFHLElBQUksY0FBYyxDQUFzQixxQkFBcUIsQ0FBQzs7Ozs7O0FDeEJuRztJQVdDLDhCQUN3QyxtQkFBbUIsRUFDbEMsT0FBTztRQURRLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBQTtRQUNsQyxZQUFPLEdBQVAsT0FBTyxDQUFBO0tBQzVCOzs7OztJQUVKLG1DQUFJOzs7O0lBQUosVUFBSyxNQUFzRDtRQUF0RCx1QkFBQSxFQUFBLFNBQThCLElBQUksQ0FBQyxtQkFBbUI7UUFDMUQsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sS0FB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