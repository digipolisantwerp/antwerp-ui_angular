import {DebugElement} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {ValidationListComponent} from './validation-list.component';
import {ValidationMessagesService} from '../../services/validation-messages.service';

class MockValidationMessagesService {
  public INVALID_FILE_TYPE = 'INVALID_FILE_TYPE_test';
  public INVALID_FILE_SIZE = 'INVALID_FILE_SIZE_test';
  public INVALID_MIME_TYPE = 'INVALID_MIME_TYPE_test';
}

describe('The validation list Component', () => {
  let comp: ValidationListComponent;
  let fixture: ComponentFixture<ValidationListComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ValidationListComponent,
      ],
      providers: [
        {provide: ValidationMessagesService, useClass: MockValidationMessagesService},
      ],
    })
      .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationListComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('.m-upload__files'));
    el = de.nativeElement;
  });

  it('should exist', () => {
    fixture.detectChanges();
    expect(el).not.toBeUndefined();
  });

  it('should format reasons', () => {
    const reasons = ['INVALID_FILE_TYPE', 'INVALID_FILE_SIZE'];
    expect(comp.formatReasons(reasons)).toEqual('INVALID_FILE_TYPE_test, INVALID_FILE_SIZE_test');
  });
});
