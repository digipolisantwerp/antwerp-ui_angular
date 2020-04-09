import {async, inject, TestBed} from '@angular/core/testing';

import {ContextService} from './context.service';
import {ContextWriterService} from './context-writer.service';

const injectService = cb => inject(
  [ContextService],
  (contextService: ContextService) => cb(contextService)
);

class MockContextWriterService {
  public updateMetaTags(meta: any = {}) {
  }
}

describe('The Context Service', () => {

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: ContextWriterService, useClass: MockContextWriterService},
        ContextService,
      ],
    }).compileComponents();
  }));

  it(
    'should update the inner context$ and call the ContextWriter when updateContext is called',
    async(injectService(contextService => {
      spyOn(contextService.context$, 'next');
      spyOn(contextService.contextWriter, 'updateMetaTags');

      contextService.updateContext({});

      expect(contextService.context$.next).toHaveBeenCalled();
      expect(contextService.contextWriter.updateMetaTags).toHaveBeenCalled();
    }))
  );
});
