import {ComponentFixture, TestBed} from '@angular/core/testing';
import {COMPONENTS} from '../components';
import {MenuLinkComponent} from './menu-link.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

describe('Menu Link Test', () => {
  let fixture: ComponentFixture<MenuLinkComponent>;
  let component: MenuLinkComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ...COMPONENTS,
      ],
      imports: [
        RouterModule,
        CommonModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuLinkComponent);
    component = fixture.componentInstance;
  });

  describe('Initialization', () => {
    it('should create the component', () => {
      expect(fixture).toBeDefined();
      expect(component).toBeDefined();
    });
  });
});
