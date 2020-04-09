import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {MaskDirective} from './mask.directive';

@Component({
  selector: 'aui-test',
  template: `
		<form [formGroup]="form">
			<input type="text" [auiMask]="{'mask': '(999) 999-9999'}" formControlName="masked" />
		</form>
	`,
})
class TestComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
  }

  public ngOnInit() {
    this.form = this.fb.group({
      masked: '',
    });
  }
}

describe('The Mask Directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  let comp: TestComponent;
  let inputEl: DebugElement;
  let de: DebugElement;
  let el: MaskDirective;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [
        MaskDirective,
        TestComponent,
      ],
      providers: [],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.directive(MaskDirective));
    inputEl = fixture.debugElement.query(By.css('input'));
    el = de.injector.get(MaskDirective);
  });

  it('should update the view when the form value changes', () => {
    fixture.detectChanges();
    comp.form.patchValue({masked: 'AZER34'});
    expect(inputEl.nativeElement.value).toEqual('(34_) ___-____');
  });

  it('should update the view when the form value changes', () => {
    fixture.detectChanges();
    comp.form.patchValue({masked: '999AZER11test2test333test232'});
    expect(inputEl.nativeElement.value).toEqual('(999) 112-3332');
  });

  it('should update the view when the form value changes', () => {
    fixture.detectChanges();
    comp.form.patchValue({masked: '1234567890'});
    expect(inputEl.nativeElement.value).toEqual('(123) 456-7890');
  });
});
