import { LeafletControlComponent } from './leaflet-control.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IconModule } from '@acpaas-ui/ngx-icon';

describe('The leaflet control component', () => {
  let fixture: ComponentFixture<LeafletControlComponent>;
  let comp: LeafletControlComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeafletControlComponent],
      imports: [IconModule],
    }).compileComponents();
    fixture = TestBed.createComponent(LeafletControlComponent);
    comp = fixture.componentInstance;
  });

  it('should be enabled', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.o-leaflet__control')).properties.disabled).toBeUndefined();
  });

  it('should have the correct icon', () => {
    comp.icon = 'ai-close';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.ai')).nativeElement.classList).toContain('ai-close');
  });

  describe('when disabled', () => {
    it('should disable the button', () => {
      comp.disabled = true;
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.o-leaflet__control')).properties.disabled).toEqual(true);
    });
  });
});
