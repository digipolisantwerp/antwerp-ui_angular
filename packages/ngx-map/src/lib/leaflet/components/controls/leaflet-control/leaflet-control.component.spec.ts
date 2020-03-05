import {LeafletControlComponent} from './leaflet-control.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

describe('The leaflet control component', () => {
  let fixture: ComponentFixture<LeafletControlComponent>;
  let comp: LeafletControlComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LeafletControlComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(LeafletControlComponent);
    comp = fixture.componentInstance;
  });

  it('should be enabled', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.o-leaflet__control')).properties.disabled).toBeUndefined();
  });

  it('should have the correct icon', () => {
    comp.icon = 'check';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.fa')).nativeElement.classList).toContain('fa-check');
  });

  describe('when disabled', () => {
    it('should disable the button', () => {
      comp.disabled = true;
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.o-leaflet__control')).properties.disabled).toEqual(true);
    });
  });
});
