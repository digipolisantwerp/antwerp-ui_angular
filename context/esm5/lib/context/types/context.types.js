/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
export function Context() { }
function Context_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    Context.prototype.title;
    /** @type {?|undefined} */
    Context.prototype.titleSuffix;
    /** @type {?|undefined} */
    Context.prototype.description;
    /** @type {?|undefined} */
    Context.prototype.favIcon;
    /* TODO: handle strange member:
    'og:url'?: string;
    */
    /* TODO: handle strange member:
    'og:type'?: string;
    */
    /* TODO: handle strange member:
    'og:title'?: string;
    */
    /* TODO: handle strange member:
    'og:description'?: string;
    */
    /* TODO: handle strange member:
    'og:image'?: string;
    */
    /* TODO: handle strange member:
    'fb:app_id'?: string;
    */
    /* TODO: handle strange member:
    'og:locale'?: string;
    */
    /* TODO: handle strange member:
    'og:locale:alternate'?: string;
    */
    /* TODO: handle strange member:
    'og:see_also'?: string;
    */
    /* TODO: handle strange member:
    'og:updated_time'?: string;
    */
    /* TODO: handle strange member:
    'twitter:card'?: string;
    */
    /* TODO: handle strange member:
    'twitter:site'?: string;
    */
    /* TODO: handle strange member:
    'twitter:creator'?: string;
    */
    /* TODO: handle strange member:
    [key: string]: string;
    */
}
/**
 * @record
 */
export function ContextConfig() { }
function ContextConfig_tsickle_Closure_declarations() {
    /**
     * Flag to append an optional title suffix to the title.
     * Default value: false
     * @type {?|undefined}
     */
    ContextConfig.prototype.useTitleSuffix;
    /**
     * Flag to append the title of parent pages to the page title.
     * Default value: false
     * @type {?}
     */
    ContextConfig.prototype.extendTitle;
    /**
     * A delimter when using extendTitle.
     * Default value: | (pipe)
     * @type {?}
     */
    ContextConfig.prototype.titleDelimiter;
    /**
     * A dictionary of default meta tags and their values
     * @type {?|undefined}
     */
    ContextConfig.prototype.defaults;
    /**
     * Enable route listener
     * @type {?|undefined}
     */
    ContextConfig.prototype.routerContext;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC50eXBlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbnRleHQvIiwic291cmNlcyI6WyJsaWIvY29udGV4dC90eXBlcy9jb250ZXh0LnR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIENvbnRleHQge1xuXHQvLyBEZWZhdWx0IE1FVEEgYW5kIFNFT1xuXHR0aXRsZT86IHN0cmluZztcblx0dGl0bGVTdWZmaXg/OiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXHRmYXZJY29uPzogc3RyaW5nO1xuXHQvLyBGQiBvcGVuIGdyYXBoXG5cdCdvZzp1cmwnPzogc3RyaW5nO1xuXHQnb2c6dHlwZSc/OiBzdHJpbmc7XG5cdCdvZzp0aXRsZSc/OiBzdHJpbmc7XG5cdCdvZzpkZXNjcmlwdGlvbic/OiBzdHJpbmc7XG5cdCdvZzppbWFnZSc/OiBzdHJpbmc7XG5cdCdmYjphcHBfaWQnPzogc3RyaW5nO1xuXHQnb2c6bG9jYWxlJz86IHN0cmluZztcblx0J29nOmxvY2FsZTphbHRlcm5hdGUnPzogc3RyaW5nO1xuXHQnb2c6c2VlX2Fsc28nPzogc3RyaW5nO1xuXHQnb2c6dXBkYXRlZF90aW1lJz86IHN0cmluZztcblx0Ly8gVHdpdHRlciBjYXJkXG5cdCd0d2l0dGVyOmNhcmQnPzogc3RyaW5nOyAvLyBUaGUgY2FyZCB0eXBlLCB3aGljaCB3aWxsIGJlIG9uZSBvZiDigJxzdW1tYXJ54oCdLCDigJxzdW1tYXJ5X2xhcmdlX2ltYWdl4oCdLCDigJxhcHDigJ0sIG9yIOKAnHBsYXllcuKAnS5cblx0J3R3aXR0ZXI6c2l0ZSc/OiBzdHJpbmc7IC8vIEBzaXRldXNlcm5hbWVcblx0J3R3aXR0ZXI6Y3JlYXRvcic/OiBzdHJpbmc7IC8vIEBjcmVhdG9ydXNlcm5hbWVcblx0W2tleTogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnRleHRDb25maWcge1xuXHQvKipcblx0ICogRmxhZyB0byBhcHBlbmQgYW4gb3B0aW9uYWwgdGl0bGUgc3VmZml4IHRvIHRoZSB0aXRsZS5cblx0ICogRGVmYXVsdCB2YWx1ZTogZmFsc2Vcblx0ICovXG5cdHVzZVRpdGxlU3VmZml4PzogYm9vbGVhbjtcblxuXHQvKipcblx0ICogRmxhZyB0byBhcHBlbmQgdGhlIHRpdGxlIG9mIHBhcmVudCBwYWdlcyB0byB0aGUgcGFnZSB0aXRsZS5cblx0ICogRGVmYXVsdCB2YWx1ZTogZmFsc2Vcblx0ICovXG5cdGV4dGVuZFRpdGxlOiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBBIGRlbGltdGVyIHdoZW4gdXNpbmcgZXh0ZW5kVGl0bGUuXG5cdCAqIERlZmF1bHQgdmFsdWU6IHwgKHBpcGUpXG5cdCAqL1xuXHR0aXRsZURlbGltaXRlcjogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBBIGRpY3Rpb25hcnkgb2YgZGVmYXVsdCBtZXRhIHRhZ3MgYW5kIHRoZWlyIHZhbHVlc1xuXHQgKi9cblx0ZGVmYXVsdHM/OiBDb250ZXh0O1xuXG5cdC8qKlxuXHQgKiBFbmFibGUgcm91dGUgbGlzdGVuZXJcblx0ICovXG5cdHJvdXRlckNvbnRleHQ/OiBib29sZWFuO1xufVxuIl19