import { async, inject } from '@angular/core/testing';
import { InterpolateLabelPipe, PluralizeLabelPipe } from '../labels.pipe';

describe('The interpolate pipe', () => {
    let interpolatePipe;

    beforeEach(() => {
        interpolatePipe = new InterpolateLabelPipe();
    });

    it('returns the label if no label was provided', () => {
        expect(interpolatePipe.transform()).toBeUndefined();
        const label = undefined;
        expect(interpolatePipe.transform(label, {})).toBeUndefined();
    });

    it('returns the label if no replaceData was defined', () => {
        expect(interpolatePipe.transform('test')).toEqual('test');
    });

    it('replaces matching props in the label with the values provided in the replaceData', () => {
        expect(interpolatePipe.transform(
            'test %{some} %{value}',
            { some: 'all', value: 'the things' }
        )).toEqual('test all the things');
    });
});

describe('The pluralize pipe', () => {
    let pluralizePipe;

    beforeEach(() => {
        pluralizePipe = new PluralizeLabelPipe();
    });

    it('returns the label if no label was provided', () => {
        expect(pluralizePipe.transform()).toBeUndefined();
        const label = undefined;
        expect(pluralizePipe.transform(label, 2)).toBeUndefined();
    });

    it('returns the label if it is a string', () => {
        expect(pluralizePipe.transform('test')).toEqual('test');
    });

    it('returns the singular label if the count is 1', () => {
        const label = {
            singular: 'i am but one',
            plural: 'we are many'
        };

        expect(pluralizePipe.transform(label, 1)).toEqual('i am but one');
    });

    it('returns the plural label if the count is not 1', () => {
        const label = {
            singular: 'i am but one',
            plural: 'we are many'
        };

        expect(pluralizePipe.transform(label)).toEqual('we are many');
        expect(pluralizePipe.transform(label, 0)).toEqual('we are many');
        expect(pluralizePipe.transform(label, 5)).toEqual('we are many');
    });
});
