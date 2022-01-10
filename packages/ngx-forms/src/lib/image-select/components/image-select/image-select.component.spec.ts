import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ImageSelectComponent } from './image-select.component';


describe('The ImageSelect Component', () => {
  let comp: ImageSelectComponent;
  let fixture: ComponentFixture<ImageSelectComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageSelectComponent], // declare the test component
    })
      .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSelectComponent);

    comp = fixture.componentInstance; // BannerComponent test instance
    comp.choices = [
      {
        label: 'Kiwi',
        key: 'kiwi',
        alt: 'Kiwi',
        // tslint:disable-next-line:max-line-length
        url: 'https://images.unsplash.com/photo-1591796079433-7f41b45eb95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2004&q=80'
      },
      {
        label: 'Apple',
        key: 'apple',
        alt: 'Apple',
        // tslint:disable-next-line:max-line-length
        url: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      },
      {
        label: 'Raspberry',
        key: 'raspberry',
        alt: 'Raspberry',
        // tslint:disable-next-line:max-line-length
        url: 'https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
      },
      {
        label: 'Cherry',
        key: 'cherry',
        alt: 'Cherry',
        // tslint:disable-next-line:max-line-length
        url: 'https://images.unsplash.com/photo-1528821154947-1aa3d1b74941?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      },
      {
        label: 'Pear',
        key: 'pear',
        alt: 'Pear',
        // tslint:disable-next-line:max-line-length
        url: 'https://images.unsplash.com/photo-1548199569-3e1c6aa8f469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=992&q=80'
      },
    ];

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('.grid-container'));
    el = de.nativeElement;
  });

  it('should exist', () => {
    fixture.detectChanges();
    expect(el).not.toBeUndefined();
  });

  it('ngOnInit must initialize maxSelectable', () => {
    spyOn(comp, 'updateModel');
    comp.maxSelectable = undefined;
    comp.ngOnInit();

    expect(comp.maxSelectable).toBe(comp.choices.length);
  });

  describe('toggleSelected', () => {
    it('should update the model', () => {
      spyOn(comp, 'updateModel');
      fixture.detectChanges();

      comp.toggleSelected('apple');

      expect(comp.selectedImageKeys).toEqual(['apple']);
      expect(comp.updateModel).toHaveBeenCalledWith(['apple']);
    });

    it('should add the selected image key if it was not in the selectedImageKeys array and update the model value', () => {
      comp.selectedImageKeys = ['apple'];

      spyOn(comp, 'updateModel').and.stub();
      fixture.detectChanges();

      comp.toggleSelected('pear');

      expect(comp.selectedImageKeys).toEqual(['apple', 'pear']);
      expect(comp.updateModel).toHaveBeenCalledWith(['apple', 'pear']);
    });

    it('should remove the selected image key if it was present in the selectedItems array  and update the model value', () => {
      comp.selectedImageKeys = ['apple', 'pear', 'kiwi'];

      spyOn(comp, 'updateModel').and.stub();
      fixture.detectChanges();

      comp.toggleSelected('pear');

      expect(comp.selectedImageKeys).toEqual(['apple', 'kiwi']);
      expect(comp.updateModel).toHaveBeenCalledWith(['apple', 'kiwi']);
    });

    it('should not do anything on selecting when max selectable is reached', () => {
      comp.selectedImageKeys = ['apple', 'pear'];
      comp.maxSelectable = 2;

      spyOn(comp, 'updateModel').and.stub();
      fixture.detectChanges();

      comp.toggleSelected('kiwi');

      expect(comp.selectedImageKeys).toEqual(['apple', 'pear']);
      expect(comp.updateModel).not.toHaveBeenCalled();
    });

    it('should be able to deselect when max selectable is reached', () => {
      comp.selectedImageKeys = ['apple', 'pear'];
      comp.maxSelectable = 2;

      spyOn(comp, 'updateModel').and.stub();
      fixture.detectChanges();

      comp.toggleSelected('apple');

      expect(comp.selectedImageKeys).toEqual(['pear',]);
      expect(comp.updateModel).toHaveBeenCalledWith(['pear']);
    });
  });
});

