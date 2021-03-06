import { android } from '@nativescript/core/application';
import { Color } from '@nativescript/core/color';
import { EventData } from '@nativescript/core/data/observable';
import { device, isAndroid } from '@nativescript/core/platform';
import { Label } from '@nativescript/core/ui/label';
import { Page } from '@nativescript/core/ui/page';
import { CheckBox } from '@nstudio/nativescript-checkbox';
import { DataItem, HelloWorldModel } from './main-view-model';

let page: Page;
let model: HelloWorldModel;

// Event handler for Page "loaded" event attached in main-page.xml
export function onNavigatedTo(args: EventData) {
  // Get the event sender
  page = args.object as Page;
  model = new HelloWorldModel();
  page.bindingContext = model;

  // Not related to checkboxes
  if (isAndroid && device.sdkVersion >= '21') {
    const window = android.startActivity.getWindow();
    window.setStatusBarColor(new Color('#3f3f3f').android);
  }
}

export function disabledTapTestCheck() {
  const tapTestCheck = page.getViewById('tapTestCheck') as CheckBox;
  tapTestCheck.isEnabled = !tapTestCheck.isEnabled;
}

export function onToggleTest(args) {
  console.log('toggle tap');
  const toggleTest = page.getViewById('toggleTest') as CheckBox;
  toggleTest.toggle();
}

export function onCustomCheckStateChange(args) {
  console.log('toggle enabled state tap');
  const toggleTest = page.getViewById('toggleTest') as CheckBox;
  toggleTest.isEnabled = !toggleTest.isEnabled;
}

export function onTapTest(args) {
  console.log('tap event test');
  const box = args.object as CheckBox;
  model.updateMessage(box.checked);
}

export function onRepeaterItemTap(args: any) {
  const label = <Label>page.getViewById('modelDumpLabel');
  const data = new Array<DataItem>();

  for (let i = 0; i < model.data.length; i++) {
    data.push(model.data.getItem(i));
  }

  label.text = JSON.stringify(data);
}
