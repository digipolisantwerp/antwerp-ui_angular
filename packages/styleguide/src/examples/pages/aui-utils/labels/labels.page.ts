import {Component} from '@angular/core';
import {interpolate, Label} from '../../../../../../ngx-utils/src/public-api';

@Component({
  templateUrl: './labels.page.html',
})
export class UtilsLabelsDemoPageComponent {
  public interpolateMessage = 'This %{text} requires your attention.';

  public interpolateString = {
    text: 'message',
  };

  public pluralizeMessage: Label = {
    singular: 'This %{text} requires your attention.',
    plural: 'These %{text}s require your attention.',
  };

  public pluralizeMail: Label = {
    singular: 'This mail requires your attention.',
    plural: 'These mails require your attention.',
  };

  public remainingMessages = {
    remaining: 3,
  };

  public toggle = true;

  public importModule = `import { LabelsModule } from '@acpaas-ui/ngx-utils';

@NgModule({
	imports: [
		LabelsModule
	],
})

export class AppModule {};`;

  public codeExampleJS1 = `import { Label, interpolate } from '@acpaas-ui/ngx-utils';`;

  public codeExampleJS2 = `public interpolateValue() {
	const interpolatedValue = interpolate('This is number %{number} of an interpolated %{text}.', {text: 'message', number: 1});
	return interpolatedValue;
}`;

  public codeExampleJS3 = `public interpolateMessage = 'This %{text} requires your attention.';

public interpolateString = {
	text: 'message',
};`;

  public codeExampleJS4 = `public pluralizeMail: Label = {
	singular: 'This mail requires your attention.',
	plural: 'These mails require your attention.',
};

public get amount() { return this.toggle ? { value: 1 } : { value: 0 }; }

public toggleAmount() { this.toggle = !this.toggle; }`;

  public codeExampleJS5 = `public interpolateString = {
	text: 'message',
};

public pluralizeMessage: Label = {
	singular: 'This %{text} requires your attention.',
	plural: 'These %{text}s require your attention.',
};

public remainingMessages = {
	remaining: 3,
};`;

  public codeExampleHTML1 = `{{ interpolateValue() }}`;

  public codeExampleHTML2 = `<span [innerHTML]="interpolateMessage | interpolateLabel:interpolateString "></span>`;

  public codeExampleHTML3 = `<button type="button" class="a-button" (click)="toggleAmount()">Toggle amount</button>

{{ pluralizeMail | pluralizeLabel:amount.value }}`;

  public codeExampleHTML4 = `{{ pluralizeMessage | pluralizeLabel:remainingMessages.remaining | interpolateLabel:interpolateString }}`;

  public get amount() {
    return this.toggle ? {description: 'singular', value: 1} : {description: 'plural', value: 0};
  }

  public interpolateValue() {
    const interpolatedValue = interpolate('This is number %{number} of an interpolated %{text}.', {text: 'message', number: 1});
    return interpolatedValue;
  }

  public toggleAmount() {
    this.toggle = !this.toggle;
  }
}
