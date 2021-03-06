<a align="center" href="https://www.npmjs.com/package/@nstudio/nativescript-checkbox">
    <h3 align="center">NativeScript Checkbox</h3>
</a>
<h4 align="center">A NativeScript plugin to provide a checkbox widget, radio buttons are also possible.</h4>

<p align="center">
    <a href="https://www.npmjs.com/package/@nstudio/nativescript-checkbox">
        <img src="https://github.com/nstudio/nativescript-checkbox/workflows/Build%20CI/badge.svg" alt="Action Build">
    </a>
    <a href="https://www.npmjs.com/package/nativescript-checkbox">
        <img src="https://img.shields.io/npm/dt/nativescript-checkbox.svg?label=npm%20downloads" alt="npm">
    </a>
    <a href="https://github.com/bradmartin/nativescript-checkbox/stargazers">
        <img src="https://img.shields.io/github/stars/bradmartin/nativescript-checkbox.svg" alt="stars">
    </a>
    <br />
    <a href="http://nstudio.io">
      <img src="./screens/nstudio-banner.png" alt="nStudio banner">
    </a>
    <h5 align="center">Do you need assistance on your project or plugin? Contact the nStudio team anytime at <a href="mailto:team@nstudio.io">team@nstudio.io</a> to get up to speed with the best practices in mobile and web app development.
    </h5>
</p>

---

### Installation

From your command prompt/terminal go to your app's root folder and execute:

`tns plugin add @nstudio/nativescript-checkbox`

#### Platform controls used:

| Android                                                                                  | iOS                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| [Android CheckBox](https://developer.android.com/reference/android/widget/CheckBox.html) | [BEMCheckBox](http://cocoapods.org/pods/BEMCheckBox) |

## Sample Usage

| Android Sample                     | iOS Sample                            |
| ---------------------------------- | ------------------------------------- |
| ![Sample1](./screens/checkbox.gif) | ![Sample2](./screens/iosCheckbox.gif) |

## Usage

###

```XML
<Page
  xmlns="http://schemas.nativescript.org/tns.xsd"
  xmlns:CheckBox="@nstudio/nativescript-checkbox" loaded="pageLoaded">
  <ActionBar title="Native Checkbox" />
  <StackLayout>
    <CheckBox:CheckBox checked="{{ checkProp }}" text="{{ myCheckText }}" fillColor="{{ myCheckColor }}" id="myCheckbox" />
    <CheckBox:CheckBox text="CheckBox Label" checked="false" />
  </StackLayout>
</Page>
```

###

```typescript

import { CheckBox } from '@nstudio/nativescript-checkbox';
import { topmost } from '@nativescript/core/ui/frame';

public toggleCheck() {
  const checkBox = topmost().getViewById('yourCheckBoxId');
  checkBox.toggle();
}

public getCheckProp() {
  const checkBox = topmost().getViewById('yourCheckBoxId');
  console.log('checked prop value = ' + checkBox.checked);
}

```

### Angular Usage Sample:

```typescript
import { TNSCheckBoxModule } from '@nstudio/nativescript-checkbox/angular';

@NgModule({
  imports: [TNSCheckBoxModule],
  // etc.
})
export class YourModule {}

// component:
export class SomeComponent {
  @ViewChild('CB1') FirstCheckBox: ElementRef;
  constructor() {}
  public toggleCheck() {
    this.FirstCheckBox.nativeElement.toggle();
  }

  public getCheckProp() {
    console.log(
      'checked prop value = ' + this.FirstCheckBox.nativeElement.checked
    );
  }
}
```

```html
<StackLayout>
  <CheckBox #CB1 text="CheckBox Label" checked="false"></CheckBox>
  <button (tap)="toggleCheck()" text="Toggle it!"></button>
  <button (tap)="getCheckProp()" text="Check Property"></button>
</StackLayout>
```

### NativeScript-Vue Usage Sample

In your `main.js` (The file where the root Vue instance is created) register the element

```js
Vue.registerElement(
  'CheckBox',
  () => require('@nstudio/nativescript-checkbox').CheckBox,
  {
    model: {
      prop: 'checked',
      event: 'checkedChange',
    },
  }
);
```

And in your template, use it as:

```html
<check-box :checked="isChecked" @checkedChange="isChecked = $event.value" />
```

Use `checked` instead of `v-model`. [See #99](https://github.com/nstudio/nativescript-checkbox/issues/99).

## Properties

- **checked** - boolean
- **text** - text to use with the checkbox
- **fillColor** - Color of the checkbox element
- **boxType** - Either 'square' (default) or 'circle'. It's recommended to use 'circle' for radiobuttons. Note that plugin version 3.0.0 switched the default for iOS to 'square' for alignment with Android. Still want `circle` on iOS and `square` on Android? Just make the `boxType` value conditional.

## Events

- **checkedChange** - Use a reference to the CheckBox component to grab it's `checked` property when this event fires to see the new value.

## API

- **toggle()** - Change the checked state of the view to the inverse of its current state.

## Css Styling

- **color** - set the text label color
- **font-size** - checkbox is sized to text from here : default 15
- **border-width** - set the line width of the checkbox element: iOS only

## Styling [Android]

- **checkStyle** - set to the name of your drawable
- **checkPadding** - set the padding of the checkbox

Add the following to `app/App_Resources/Android/drawable/checkbox_grey.xml`

```xml
<?xml version="1.0" encoding="utf-8"?>

<selector xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:state_enabled="false" android:state_checked="true" android:drawable="@drawable/ic_checkbox_checked_incomplete" />
    <item android:state_enabled="false" android:state_checked="false" android:drawable="@drawable/ic_checkbox_grey_incomplete" />
    <item android:state_checked="true" android:drawable="@drawable/ic_checkbox_checked_grey"/>
    <item android:state_checked="false" android:drawable="@drawable/ic_checkbox_grey" />
</selector>
```

## Radiobuttons, anyone?

Want to use radiobutton behavior for your checkboxes (only one option possible within a group)?
Set `boxType="circle"` and check out the second tab in the [Angular demo](demo-ng/), here's a screenshot:

<img src="./screens/radiobuttons.png" width="225px"/>

## Contributing & Running Demo Apps

- Execute from root:
  - For android: `npm run demo.android`
  - For iOS: `npm run demo.ios`
  - `npm run demo.ng.android` (for angular android)
  - `npm run demo.ng.ios` (for angular ios)
