# @acpaas-ui/logo
The @acpaas-ui/logo generates an image wrapped in an anchor.

## Dependencies
/

## Installation

```
$ npm install @acpaas-ui/logo
```

Import component in **app.module.ts**

```
import { LogoModule } from '@acpaas-ui/logo';

@NgModule({
  imports: [
    LogoModule
  ],
  declarations: [
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
}
```

## Usage

```
<aui-logo [title]="'Title for logo'" [src]="'/path/to/logo.svg'" [descriptor]="descriptorObject"></aui-logo>
```

### Options

#### title
*string* : Used for alt and title on img and a -tags

#### src
*string* : Path to image

#### link
*string* : URL address to go to when the logo is clicked

## Descriptor

If you want to add a descriptor logo, you can simply use another instance of the aui-logo component.
