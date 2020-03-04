import {Component} from '@angular/core';
import {async, inject, TestBed} from '@angular/core/testing';

import {ContextWriterService} from './context-writer.service';
import {ContextConfig} from '../types/context.types';

import {CONTEXT_CONFIG} from '../context.conf';

const injectService = cb => inject([ContextWriterService], (contextService: ContextWriterService) => cb(contextService));

@Component({
  template: 'Hello world',
})
class AppComponent {
}

describe('The Context Writer Service', () => {
  const fixture = null;
  const comp = null;
  const de = null;

  const metaConfig: ContextConfig = {
    useTitleSuffix: true,
    extendTitle: true,
    titleDelimiter: ' | ',
    defaults: {
      title: 'test',
      'og:title': 'facebook title',
    },
  };

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: CONTEXT_CONFIG, useValue: metaConfig},
        ContextWriterService,
      ],
    }).compileComponents();
  }));

  describe('Setting the title', () => {
    it('should render a default title', injectService((contextService: ContextWriterService) => {
      contextService.setTag('title', {});
      expect(document.head.querySelector('title').innerText).toBe(metaConfig.defaults.title);
    }));

    it('should render a title', injectService((contextService: ContextWriterService) => {
      contextService.setTag('title', {title: 'test', titleSuffix: ' suffix'});
      expect(document.head.querySelector('title').innerText).toBe('test suffix');
    }));
  });

  describe('Setting tags', () => {
    it('should render a description', injectService((contextService: ContextWriterService) => {
      contextService.setTag('description', {description: 'this is a test'});
      expect(document.head.querySelector('[name=description]').getAttribute('content')).toBe('this is a test');
    }));

    it('should change a tag', injectService((contextService: ContextWriterService) => {
      contextService.setTag('description', {description: 'this is second test'});
      expect(document.head.querySelector('[name=description]').getAttribute('content')).toBe('this is second test');
    }));

    it('should render a tag', injectService((contextService: ContextWriterService) => {
      contextService.setTag('twitter:card', {'twitter:card': 'summary'});
      expect(document.head.querySelector('[name="twitter:card"]').getAttribute('content')).toBe('summary');
    }));

    it('should use the default value if no content was provided', injectService((contextService: ContextWriterService) => {
      (contextService as any).metaConfig.defaults.description = 'test';
      contextService.setTag('description');
      expect(document.head.querySelector('[name=description]').getAttribute('content')).toBe('test');
    }));

    it('should empty the tag if no value or default value was provided', injectService((contextService: ContextWriterService) => {
      contextService.setTag('description');
      expect(document.head.querySelector('[name=description]').getAttribute('content')).toBe('');
    }));
  });

  describe('Updating the metatags', () => {
    it('should not update metatags if disableUpdate is set to true', injectService((contextService: ContextWriterService) => {
      spyOn(contextService, 'setTag');

      contextService.updateMetaTags({disableUpdate: true});

      expect(contextService.setTag).not.toHaveBeenCalled();
    }));

    it('should update metatags', injectService((contextService: ContextWriterService) => {
      const testMeta = {
        title: 'test meta',
        description: 'test the meta tags',
        'twitter:card': 'meta summary',
      };

      contextService.updateMetaTags(testMeta);
      expect(document.head.querySelector('title').innerText).toBe(testMeta.title);
      expect(document.head.querySelector('[name=description]').getAttribute('content')).toBe(testMeta.description);
      expect(document.head.querySelector('[name="twitter:card"]').getAttribute('content')).toBe(testMeta['twitter:card']);
    }));

    it('should extend the title if extendTitle is true and there is a parent', injectService((contextService: ContextWriterService) => {
      const testMeta = {
        title: 'test',
        parent: ['parent'],
      };

      (contextService as any).metaConfig.extendTitle = true;
      (contextService as any).metaConfig.titleDelimiter = ', ';

      contextService.updateMetaTags(testMeta);

      expect(document.head.querySelector('title').innerText).toEqual('test, parent');
    }));
  });
});
