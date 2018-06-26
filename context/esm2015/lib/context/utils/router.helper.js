/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class RouterHelper {
    /**
     * @param {?} route
     * @param {?=} titles
     * @return {?}
     */
    static getParentTitle(route, titles = []) {
        if (!route) {
            return titles;
        }
        const /** @type {?} */ title = this.verifyPath(route, 'parent.data.meta.title');
        const /** @type {?} */ newTitles = title ? titles.concat(title) : titles;
        return route.parent ? this.getParentTitle(route.parent, newTitles) : newTitles;
    }
    /**
     * @param {?} data
     * @param {?} path
     * @return {?}
     */
    static verifyPath(data, path) {
        let /** @type {?} */ curr = data;
        const /** @type {?} */ namespace = path.split('.');
        for (let /** @type {?} */ i = 0; i < namespace.length; i += 1) {
            if (!!curr[namespace[i]]) {
                // can't use hasOwnProperty so we'll cast to Boolean
                curr = curr[namespace[i]];
                continue;
            }
            return null;
        }
        return curr;
    }
    /**
     * @param {?} activatedRoute
     * @return {?}
     */
    static findLastChild(activatedRoute) {
        const /** @type {?} */ snapshot = activatedRoute.snapshot;
        let /** @type {?} */ child = snapshot.firstChild;
        while (child.firstChild !== null) {
            child = child.firstChild;
        }
        return child;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbnRleHQvIiwic291cmNlcyI6WyJsaWIvY29udGV4dC91dGlscy9yb3V0ZXIuaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNOzs7Ozs7SUFDRSxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxTQUFtQixFQUFFO1FBQ3hELEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDZDtRQUVELHVCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBQy9ELHVCQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUV4RCxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7Ozs7Ozs7SUFHekUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFTLEVBQUUsSUFBWTtRQUMvQyxxQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLHVCQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWxDLEdBQUcsQ0FBQyxDQUFDLHFCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQzlDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztnQkFDMUIsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsUUFBUSxDQUFDO2FBQ1Q7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ1o7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDOzs7Ozs7SUFHTixNQUFNLENBQUMsYUFBYSxDQUFDLGNBQThCO1FBQ3pELHVCQUFNLFFBQVEsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDO1FBRXpDLHFCQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQ2hDLE9BQU8sS0FBSyxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNsQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztTQUN6QjtRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7O0NBRWQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJIZWxwZXIge1xuXHRwdWJsaWMgc3RhdGljIGdldFBhcmVudFRpdGxlKHJvdXRlLCB0aXRsZXM6IHN0cmluZ1tdID0gW10pOiBzdHJpbmdbXSB7XG5cdFx0aWYgKCFyb3V0ZSkge1xuXHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHR9XG5cblx0XHRjb25zdCB0aXRsZSA9IHRoaXMudmVyaWZ5UGF0aChyb3V0ZSwgJ3BhcmVudC5kYXRhLm1ldGEudGl0bGUnKTtcblx0XHRjb25zdCBuZXdUaXRsZXMgPSB0aXRsZSA/IHRpdGxlcy5jb25jYXQodGl0bGUpIDogdGl0bGVzO1xuXG5cdFx0cmV0dXJuIHJvdXRlLnBhcmVudCA/IHRoaXMuZ2V0UGFyZW50VGl0bGUocm91dGUucGFyZW50LCBuZXdUaXRsZXMpIDogbmV3VGl0bGVzO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyB2ZXJpZnlQYXRoKGRhdGE6IGFueSwgcGF0aDogc3RyaW5nKTogYW55IHtcblx0XHRsZXQgY3VyciA9IGRhdGE7XG5cdFx0Y29uc3QgbmFtZXNwYWNlID0gcGF0aC5zcGxpdCgnLicpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lc3BhY2UubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdGlmICghIWN1cnJbbmFtZXNwYWNlW2ldXSkgeyAvLyBjYW4ndCB1c2UgaGFzT3duUHJvcGVydHkgc28gd2UnbGwgY2FzdCB0byBCb29sZWFuXG5cdFx0XHRcdGN1cnIgPSBjdXJyW25hbWVzcGFjZVtpXV07XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gY3Vycjtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgZmluZExhc3RDaGlsZChhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpOiBhbnkge1xuXHRcdGNvbnN0IHNuYXBzaG90ID0gYWN0aXZhdGVkUm91dGUuc25hcHNob3Q7XG5cblx0XHRsZXQgY2hpbGQgPSBzbmFwc2hvdC5maXJzdENoaWxkO1xuXHRcdHdoaWxlIChjaGlsZC5maXJzdENoaWxkICE9PSBudWxsKSB7XG5cdFx0XHRjaGlsZCA9IGNoaWxkLmZpcnN0Q2hpbGQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNoaWxkO1xuXHR9XG59XG4iXX0=