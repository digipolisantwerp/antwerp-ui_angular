import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CKEditorModule} from 'ng2-ckeditor';

import {WysiwygComponent} from './wysiwyg.component';

describe('The Wysiwyg Component', () => {
  let comp: WysiwygComponent;
  let fixture: ComponentFixture<WysiwygComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        CKEditorModule,
      ],
      declarations: [
        WysiwygComponent,
      ], // declare the test component
    })
      .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(WysiwygComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('.aui-wysiwyg__inner'));
    el = de.nativeElement;
  });

  it('should exist', () => {
    fixture.detectChanges();
    expect(el).not.toBeUndefined();
  });
});
