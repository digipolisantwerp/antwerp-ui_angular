import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuiLogoComponent } from './aui-logo.component';

describe('AuiLogoComponent', () => {
  let component: AuiLogoComponent;
  let fixture: ComponentFixture<AuiLogoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AuiLogoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuiLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
