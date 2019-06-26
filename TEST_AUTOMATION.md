# ACPaaS UI Test Automation Guide

When automating tests, one of the challenges is to keep the test resilient to code changes.
Using [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) can help you with that, by creating unique selectors for your tests.

## Using unique data attributes with ACPaaS UI

It's not possible to add unique data attributes to the ACPaaS UI component library for the simple reason that the attribute won't be unique anymore when you use the component multiple times on the same page.

But in your app you can simply add a data attribute to each individual ACPaaS UI component so you can target the component that you want to test.

#### Example

The following example shows the ACPaaS UI datepicker with the unique `qa` data attribute `id-1234`.

```html
<aui-datepicker
    [attr.data-qa]="id-1234"
    autocomplete="off"
    formControlName="inputDate"
    id="input-datepicker"
    name="input-datepicker"
    placeholder="dd/mm/jjjj"
    [range]="dateRange">
</aui-datepicker>
```

Which will result in:

```html
<aui-datepicker data-qa="id-1234" autocomplete="off" formcontrolname="inputDate" ...>
...
</aui-datepicker>
```

## Branding classes

Since you probably want to target a specific element or a subcomponent, selecting the parent component won't be enough.
You can however target these elements and subcomponents based on their CSS classes in combination with the unique data attribute of the parent component.

#### Example

In this example the calendar of the datepicker component can be opened or closed by toggling the `<span>` tag, which is nested in the datepicker with data attribute `data-qa="id-1234"` and CSS class `aui-flyout-action`.

```html
<aui-datepicker ... data-qa="id-1234" ...>
...
    <div ...>
        <input type="text" name="input-datepicker" ...>
        <span class="aui-flyout-action ...">...</span>
    </div>
...
</aui-datepicker>
```

#### Overview

To help you locate a specific element of a component, we've made an overview of all ACPaaS UI components and the CSS classes they use. When an element doesn't have a class set, you can still target it by selecting the element type or its custom attribute.

| Component | Class | Element / Attribute | Description |
| --------  | ----- | ------- | ----------- |
| [Autocomplete](https://digipolisantwerp.github.io/acpaas-ui_angular/modules/forms/autocomplete) | `aui-flyout-action` | input | text input field |
| | `aui-selectable-list` | ul | selectable list |
| | `m-selectable-list__item` | > li | selectable list item |
| [Datepicker](https://digipolisantwerp.github.io/acpaas-ui_angular/modules/forms/datepicker) | *no classname* | input | text input field |
| | `aui-flyout-action` | span | open/close toggle |
| | `m-datepicker__nav` | div | navigation bar |
| | `fa-angle-left` | > button > i | previous |
| | `fa-angle-right` | > button > i | next |
| | `m-datepicker__title` | > button | view toggle |
| | `m-datepicker__calendar` | tbody | calendar field |
| | *no classname* | > td > button | calendar element, depending on the selected view: day, month, year |
| [Filter](https://digipolisantwerp.github.io/acpaas-ui_angular/modules/utils/filter) (checkbox) | `a-list` | ul | filter list |
| | *no classname* | > li | filter element
| | *no classname* | > > input | checkbox |
| [Filter](https://digipolisantwerp.github.io/acpaas-ui_angular/modules/utils/filter) (input) | *no classname* | input | text input field |
| [Filter](https://digipolisantwerp.github.io/acpaas-ui_angular/modules/utils/filter) (select)  | *no classname*  | > select | select |
| [Flyout](https://digipolisantwerp.github.io/acpaas-ui_angular/modules/flyout) | `aui-flyout-action` | button | open/close toggle |
| | `m-flyout__content` | content | content of the flyout |
| | *no classname* | `auiflyoutclose` | close button in content field |
| [Footer](https://digipolisantwerp.github.io/acpaas-ui_angular/modules/layout/footer) | `aui-footer` | footer | footer wrapper |
| | `o-footer` | > div | subfooter wrapper |
| [Header](https://digipolisantwerp.github.io/acpaas-ui_angular/modules/layout/header) | `o-header` | header | header wrapper |
| | `o-header__menu-items` | > div | header element wrapper |
| | `o-header__menu-item` | > > div | header element |
| [Hero](https://digipolisantwerp.github.io/acpaas-ui_angular/modules/layout/hero) | `o-hero` | div | hero wrapper |
| | `o-hero__card` | div | hero text wrapper |
| | `o-hero__cta` | div | call to action wrapper |
| [Logo](https://digipolisantwerp.github.io/acpaas-ui_angular/modules/logo) | `o-header__logo` | a | logo link |
| [Map](https://digipolisantwerp.github.io/acpaas-ui_angular/modules/map) | `o-leaflet` | div | map component wrapper |
| | `o-leaflet__content` | > div | map pane |
| | `o-leaflet__wrapper` | > div | Leaflet map wrapper |
| | `o-leaflet__controls` | > > div | Leaflet action buttons wrapper |
| [Modal](https://digipolisantwerp.github.io/acpaas-ui_angular/modules/layout/modal) | `m-overlay` | `aui-modal-overlay` | overlay |
| | `m-modal` | > div | modal |
| | `m-modal__header` | > > div | modal header wrapper |
| | `m-modal__close` | > > > button | close button |
| | `m-modal__footer` | > > div | modal footer wrapper |
| | *no classname*  | > > > button | modal action button(s) |
| [Pagination](https://digipolisantwerp.github.io/acpaas-ui_angular/modules/pagination) (default) | `m-pagination` | ul | pagination wrapper |
| | `m-pagination__prev` | > li | element to previous page|
| | `m-pagination__next` | > li | element to next page |
| [Pagination](https://digipolisantwerp.github.io/acpaas-ui_angular/modules/pagination) (items per page) | `aui-items-per-page` | div | pagination wrapper |
| | *no classname*  | > select | select |
| [Pane](https://digipolisantwerp.github.io/acpaas-ui_angular/modules/layout/pane) | `m-pane` | div | pane |
| | `m-overlay` | div | overlay |
| [Range slider](https://digipolisantwerp.github.io/acpaas-ui_angular/modules/forms/range-slider) | `m-range-slider__inner` | div | range slider selection wrapper |
| | `m-range-slider__bar` | > div | range slider selection bar |
| | `m-range-slider__handle` | > span | range slider selection button |
| [Search filter](https://digipolisantwerp.github.io/acpaas-ui_angular/modules/forms/search-filter) | `aui-flyout-action` | button | open/close toggle |
| | `m-search-filter__search` | button | open/close toggle |
| | *no classname* | button | open/close toggle |
| | `m-search-filter__results-title` | button | open/close toggle |
| | `a-list` | > ul | list |
| | `m-search-filter__results-item` | > > li | list item |
| | `a-input__checkbox` | > > > div | checkbox wrapper |
| |  *no classname* | > > > > input | checkbox |
| [Selectable list](https://digipolisantwerp.github.io/acpaas-ui_angular/modules/selectable-list) | `m-selectable-list` | ul | selectable list |
| | `m-selectable-list__item` | li | selectable list item |
| [Table](https://digipolisantwerp.github.io/acpaas-ui_angular/modules/table) | `a-table` | table | table wrapper |
| [Time picker](https://digipolisantwerp.github.io/acpaas-ui_angular/modules/forms/timepicker) | `m-timepicker` | div | select boxes wrapper |
| | *no classname* | formcontrolname `hours` / `minutes` | hour / minute selection |
| [Upload](https://digipolisantwerp.github.io/acpaas-ui_angular/modules/forms/upload) | `m-upload` | div | upload input field wrapper |
| | `m-upload__input` | > input | input field |
| | `a-upload-queue__wrapper` | `aui-upload-queue` | files to upload and upload button wrapper |
| | `m-upload__files` | > ul | list of files to upload |
| | `m-upload__filename` | > > span | name of file to upload |
| | `m-upload__error` | > > span | error message for faulty file |
| | `a-button` | > button | upload button |
