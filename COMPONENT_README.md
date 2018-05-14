# ACPaaS UI **&lt;component&gt;**
> **&lt;short component description&gt;**

[![npm version](https://badge.fury.io/js/%40angular%2Fcore.svg)](https://badge.fury.io/js/%40angular%2Fcore)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

[Demo](link/to/demo/page)
[Documentation](link/to/documentation)
[Discussion](link/to/discussion)


# Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Examples](#examples)
4. [Contribution](#contribution)
5. [License](#license)

---

## [Installation](#installation)

```shell
npm install <package-name> --save
```

or

```shell
yarn add <package-name> --save
```

You need to include **&lt;external requirements&gt;** in your page.

```
<script src="link/to/external/script"></script>
```

## [Usage](#usage)
**&lt;custom-component&gt;** properties

| Property | Type | Required | Description
|---------------------|-------------------|------------------|------------------|
| customInput | CustomInterface | yes | **&lt;short description&gt;**|


## Development
For a working demo, clone this repo and run:

1. Install all dependencies

	```shell
	npm install
	```

	or

	```shell
	yarn
	```

2. Start

	```shell
	npm start
	```

	or

	```shell
	yarn start
	```

3. Open `http://localhost:4200` in your browser.

## [Examples](#examples)

```js
import { Component } from '@angular/core';
import { <CustomComponent>, <CustomInterface> } from '<package-name>';

@Component({
	selector: "demo-component",
	template: "...",
})
class CustomComponent {
	public exampleInput: CustomInterface = null;
}
```

```html
<custom-component [<customInput>]="exampleInput"></custom-component>
```

## [Contribution](#contribution)

Please make sure to read the [Contributing Guide](link/to/contributingguide) before making a pull request.

Thank you to all the people who already contributed to ACPaaS UI!

**List of contributors here**


## [License](#license)

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present, Digipolis
<!--stackedit_data:
eyJoaXN0b3J5IjpbMzczNTkxOTI0XX0=
-->