/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class TimePickerValidators {
    /**
     * @param {?} time
     * @return {?}
     */
    static minTime(time) {
        const /** @type {?} */ validator = (control) => {
            const /** @type {?} */ splittedControlValue = control.value.split(':');
            const /** @type {?} */ controlHours = parseInt(splittedControlValue[0], 10);
            const /** @type {?} */ controlMinutes = parseInt(splittedControlValue[1], 10);
            const /** @type {?} */ splittedMinTime = time.split(':');
            const /** @type {?} */ minHours = parseInt(splittedMinTime[0], 10);
            const /** @type {?} */ minMinutes = parseInt(splittedMinTime[1], 10);
            // Don't throw error --> use Validator.required
            if (isNaN(controlHours) || isNaN(controlMinutes) || isNaN(minHours) || isNaN(minMinutes)) {
                return null;
            }
            if (minHours < controlHours) {
                return null;
            }
            if (minHours === controlHours && minMinutes <= controlMinutes) {
                return null;
            }
            return { 'minTime': { value: control.value } };
        };
        return validator;
    }
    /**
     * @param {?} time
     * @return {?}
     */
    static maxTime(time) {
        const /** @type {?} */ validator = (control) => {
            const /** @type {?} */ splittedControlValue = control.value.split(':');
            const /** @type {?} */ controlHours = parseInt(splittedControlValue[0], 10);
            const /** @type {?} */ controlMinutes = parseInt(splittedControlValue[1], 10);
            const /** @type {?} */ splittedMinTime = time.split(':');
            const /** @type {?} */ maxHours = parseInt(splittedMinTime[0], 10);
            const /** @type {?} */ maxMinutes = parseInt(splittedMinTime[1], 10);
            // Don't throw error --> use Validator.required
            if (isNaN(controlHours) || isNaN(controlMinutes) || isNaN(maxHours) || isNaN(maxMinutes)) {
                return null;
            }
            if (maxHours > controlHours) {
                return null;
            }
            if (maxHours === controlHours && maxMinutes >= controlMinutes) {
                return null;
            }
            return { 'maxTime': { value: control.value } };
        };
        return validator;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci52YWxpZGF0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybXMvIiwic291cmNlcyI6WyJsaWIvdGltZXBpY2tlci9jbGFzc2VzL3RpbWVwaWNrZXIudmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTTs7Ozs7SUFFRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQVk7UUFDakMsdUJBQU0sU0FBUyxHQUFHLENBQUMsT0FBd0IsRUFBeUIsRUFBRTtZQUNyRSx1QkFBTSxvQkFBb0IsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0RCx1QkFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzNELHVCQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDN0QsdUJBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEMsdUJBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEQsdUJBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7O1lBR3BELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFGLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDWjtZQUVELEVBQUUsQ0FBQyxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ1o7WUFFRCxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssWUFBWSxJQUFJLFVBQVUsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUMvRCxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ1o7WUFFRCxNQUFNLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7U0FDL0MsQ0FBQztRQUVGLE1BQU0sQ0FBQyxTQUFTLENBQUM7Ozs7OztJQUlYLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBWTtRQUNqQyx1QkFBTSxTQUFTLEdBQUcsQ0FBQyxPQUF3QixFQUF5QixFQUFFO1lBQ3JFLHVCQUFNLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RELHVCQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDM0QsdUJBQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM3RCx1QkFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4Qyx1QkFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNsRCx1QkFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs7WUFHcEQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUYsTUFBTSxDQUFDLElBQUksQ0FBQzthQUNaO1lBRUQsRUFBRSxDQUFDLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDWjtZQUVELEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxZQUFZLElBQUksVUFBVSxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9ELE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDWjtZQUVELE1BQU0sQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztTQUMvQyxDQUFDO1FBRUYsTUFBTSxDQUFDLFNBQVMsQ0FBQzs7Q0FFbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0b3JGbiwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY2xhc3MgVGltZVBpY2tlclZhbGlkYXRvcnMge1xuXHQvLyB0aW1lIGBoaDptbWAgMjRoIGZvcm1hdFxuXHRwdWJsaWMgc3RhdGljIG1pblRpbWUodGltZTogc3RyaW5nKTogVmFsaWRhdG9yRm4ge1xuXHRcdGNvbnN0IHZhbGlkYXRvciA9IChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueX0gPT4ge1xuXHRcdFx0Y29uc3Qgc3BsaXR0ZWRDb250cm9sVmFsdWUgPSBjb250cm9sLnZhbHVlLnNwbGl0KCc6Jyk7XG5cdFx0XHRjb25zdCBjb250cm9sSG91cnMgPSBwYXJzZUludChzcGxpdHRlZENvbnRyb2xWYWx1ZVswXSwgMTApO1xuXHRcdFx0Y29uc3QgY29udHJvbE1pbnV0ZXMgPSBwYXJzZUludChzcGxpdHRlZENvbnRyb2xWYWx1ZVsxXSwgMTApO1xuXHRcdFx0Y29uc3Qgc3BsaXR0ZWRNaW5UaW1lID0gdGltZS5zcGxpdCgnOicpO1xuXHRcdFx0Y29uc3QgbWluSG91cnMgPSBwYXJzZUludChzcGxpdHRlZE1pblRpbWVbMF0sIDEwKTtcblx0XHRcdGNvbnN0IG1pbk1pbnV0ZXMgPSBwYXJzZUludChzcGxpdHRlZE1pblRpbWVbMV0sIDEwKTtcblxuXHRcdFx0Ly8gRG9uJ3QgdGhyb3cgZXJyb3IgLS0+IHVzZSBWYWxpZGF0b3IucmVxdWlyZWRcblx0XHRcdGlmIChpc05hTihjb250cm9sSG91cnMpIHx8IGlzTmFOKGNvbnRyb2xNaW51dGVzKSB8fCBpc05hTihtaW5Ib3VycykgfHwgaXNOYU4obWluTWludXRlcykpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChtaW5Ib3VycyA8IGNvbnRyb2xIb3Vycykge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG1pbkhvdXJzID09PSBjb250cm9sSG91cnMgJiYgbWluTWludXRlcyA8PSBjb250cm9sTWludXRlcykge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHsgJ21pblRpbWUnOiB7IHZhbHVlOiBjb250cm9sLnZhbHVlIH0gfTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHZhbGlkYXRvcjtcblx0fVxuXG5cdC8vIHRpbWUgYGhoOm1tYCAyNGggZm9ybWF0XG5cdHB1YmxpYyBzdGF0aWMgbWF4VGltZSh0aW1lOiBzdHJpbmcpOiBWYWxpZGF0b3JGbiB7XG5cdFx0Y29uc3QgdmFsaWRhdG9yID0gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55fSA9PiB7XG5cdFx0XHRjb25zdCBzcGxpdHRlZENvbnRyb2xWYWx1ZSA9IGNvbnRyb2wudmFsdWUuc3BsaXQoJzonKTtcblx0XHRcdGNvbnN0IGNvbnRyb2xIb3VycyA9IHBhcnNlSW50KHNwbGl0dGVkQ29udHJvbFZhbHVlWzBdLCAxMCk7XG5cdFx0XHRjb25zdCBjb250cm9sTWludXRlcyA9IHBhcnNlSW50KHNwbGl0dGVkQ29udHJvbFZhbHVlWzFdLCAxMCk7XG5cdFx0XHRjb25zdCBzcGxpdHRlZE1pblRpbWUgPSB0aW1lLnNwbGl0KCc6Jyk7XG5cdFx0XHRjb25zdCBtYXhIb3VycyA9IHBhcnNlSW50KHNwbGl0dGVkTWluVGltZVswXSwgMTApO1xuXHRcdFx0Y29uc3QgbWF4TWludXRlcyA9IHBhcnNlSW50KHNwbGl0dGVkTWluVGltZVsxXSwgMTApO1xuXG5cdFx0XHQvLyBEb24ndCB0aHJvdyBlcnJvciAtLT4gdXNlIFZhbGlkYXRvci5yZXF1aXJlZFxuXHRcdFx0aWYgKGlzTmFOKGNvbnRyb2xIb3VycykgfHwgaXNOYU4oY29udHJvbE1pbnV0ZXMpIHx8IGlzTmFOKG1heEhvdXJzKSB8fCBpc05hTihtYXhNaW51dGVzKSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG1heEhvdXJzID4gY29udHJvbEhvdXJzKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobWF4SG91cnMgPT09IGNvbnRyb2xIb3VycyAmJiBtYXhNaW51dGVzID49IGNvbnRyb2xNaW51dGVzKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4geyAnbWF4VGltZSc6IHsgdmFsdWU6IGNvbnRyb2wudmFsdWUgfSB9O1xuXHRcdH07XG5cblx0XHRyZXR1cm4gdmFsaWRhdG9yO1xuXHR9XG59XG4iXX0=