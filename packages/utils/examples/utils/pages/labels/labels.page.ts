import { Component } from '@angular/core';
import { Label, interpolate } from '@acpaas-ui/ngx-components/utils';

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
		remaining: 0,
	};

	public importModule = `import { LabelsModule } from '@acpaas-ui/ngx-components/utils';

@NgModule({
	imports: [
		LabelsModule
	],
})

export class AppModule {};`;

	public codeExampleJS1 = `import { Label, interpolate } from '@acpaas-ui/ngx-components/utils';`;

	public codeExampleJS2 = `public interpolateValue() {
	const interpolatedValue = interpolate('This is an interpolated %{text}.', {text: 'message'});
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

public remainingMessages = {
	remaining: 0,
};`;

	public codeExampleJS5 = `public interpolateString = {
	text: 'message',
};

public pluralizeMessage: Label = {
	singular: 'This %{text} requires your attention.',
	plural: 'These %{text}s require your attention.',
};

public remainingMessages = {
	remaining: 0,
};`;

	public codeExampleHTML1 = `{{ interpolateValue() }}`;

	public codeExampleHTML2 = `<span [innerHTML]="interpolateMessage | interpolateLabel:interpolateString "></span>`;

	public codeExampleHTML3 = `<span [innerHTML]="pluralizeMail | pluralizeLabel:remainingMessages.remaining"></span>`;

	public codeExampleHTML4 = `{{ pluralizeMessage | pluralizeLabel:remainingMessages.remaining | interpolateLabel:interpolateString }}`;

	public interpolateValue() {
		const interpolatedValue = interpolate('This is an interpolated %{text}.', {text: 'message'});
		return interpolatedValue;
	}
}
