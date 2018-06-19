# @acpaas-ui/avatar
Renders the user avatar.

## Dependencies
/

## Installation
```
npm install @acpaas-ui/avatar
```

Import component in **app.module.ts**
```
import { AvatarModule } from 'aui-component-avatar';

@NgModule({
    imports: [
        AvatarModule
    ]
})

export class AppModule {}
```

## Usage
```
<aui-avatar image="test.jpg" title="test"></aui-avatar>
<aui-avatar letter="A" title="test"></aui-avatar>
<aui-avatar icon="fa fa-user" title="test"></aui-avatar>
````

### Options

#### image
`string`: link to user avatar, renders an image.

#### letter
`string`: renders a div with a string (letter).

#### icon
`string`: renders an icon, font-awesome is used in this example.

#### title
`string`: the title for the avatar.

#### className
`string`: a custom classname to add to the avatar.

#### size
`string`: one of `S, M, L`, adds a class to the avatar
