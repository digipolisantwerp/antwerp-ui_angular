import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {PaginationComponent} from './pagination.component';

describe('PaginationComponent', () => {
  let comp: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PaginationComponent, // declare the test component
      ],
    })
      .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    comp = fixture.componentInstance; // BannerComponent test instance
    comp.display = 'numbers';
  });

  it('should emit page on update', () => {
    spyOn(comp.update, 'emit');
    comp.onUpdate(3);
    expect(comp.update.emit).toHaveBeenCalledWith(3);
  });

  it('should emit +1 page on next', () => {
    comp.itemsPerPage = 4;
    comp.totalValues = 8;
    comp.currentPage = 1;
    comp.ngOnChanges();
    fixture.detectChanges();

    spyOn(comp, 'onUpdate');
    comp.next();
    expect(comp.onUpdate).toHaveBeenCalledWith(2);
  });

  it('should emit -1 page on next', () => {
    comp.currentPage = 2;
    comp.ngOnChanges();
    fixture.detectChanges();

    spyOn(comp, 'onUpdate');
    comp.prev();
    expect(comp.onUpdate).toHaveBeenCalledWith(1);
  });

  it('should not render if total ngx-forms < 1', () => {
    comp.itemsPerPage = 4;
    comp.totalValues = 3;
    comp.currentPage = 1;
    comp.ngOnChanges();
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('.m-pagination'));
    expect(de).toBeNull();
  });

  describe('next button', () => {
    beforeEach(() => {
      comp.itemsPerPage = 4;
      comp.totalValues = 19;
      comp.ngOnChanges();
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('.m-pagination'));
      el = de.nativeElement;
    });

    it(`should show anchor to go to next page if current page is not the last page`, () => {
      comp.currentPage = 1;
      comp.ngOnChanges();
      fixture.detectChanges();

      const nextAnchor = de.query(By.css('#pagination-' + comp.instanceId + '-next-page'));
      const href = nextAnchor.nativeElement.getAttribute('href');
      expect(comp.totalPages).toEqual(5);
      expect(nextAnchor.nativeElement).not.toBeNull();
      expect(href).not.toBeNull();
    });

    it('should disable anchor to go to next page if current page is the last page', () => {
      comp.currentPage = 5;
      comp.ngOnChanges();
      fixture.detectChanges();

      const nextAnchor = de.query(By.css('#pagination-' + comp.instanceId + '-next-page' && '.is-disabled'));
      expect(nextAnchor.nativeElement).not.toBeNull();
      expect(comp.totalPages).toEqual(5);
    });
  });

  describe('prev button', () => {
    beforeEach(() => {
      comp.itemsPerPage = 4;
      comp.totalValues = 19;
      comp.ngOnChanges();
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('.m-pagination'));
      el = de.nativeElement;
    });

    it('should show anchor to go to previous page if current page is not the first page', () => {
      comp.currentPage = 3;
      comp.ngOnChanges();
      fixture.detectChanges();

      const previousAnchor = de.query(By.css('#pagination-' + comp.instanceId + '-prev-page'));
      const href = previousAnchor.nativeElement.getAttribute('href');
      expect(comp.totalPages).toEqual(5);
      expect(previousAnchor.nativeElement).not.toBeNull();
      expect(href).not.toBeNull();
    });

    it('should disable anchor to go to previous page if current page is the first page', () => {
      comp.currentPage = 1;
      comp.ngOnChanges();
      fixture.detectChanges();

      const previousAnchor = de.query(By.css('#pagination-' + comp.instanceId + '-prev-page' && '.is-disabled'));
      expect(previousAnchor.nativeElement).not.toBeNull();
      expect(comp.totalPages).toEqual(5);
    });
  });

  describe('number buttons', () => {

    it('should render buttons with less than 8 ngx-forms', () => {
      comp.itemsPerPage = 5;
      comp.totalValues = 21;
      comp.currentPage = 1;

      comp.ngOnChanges();
      fixture.detectChanges();

      de = fixture.debugElement.query(By.css('.m-pagination'));
      el = de.nativeElement;

      const nr0Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-0'));
      const nr1Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-1'));
      const nr2Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-2'));
      const nr3Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-3'));
      const nr4Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-4'));
      const nr5Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-5'));
      const nr6Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-6'));
      const nr7Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-7'));
      expect(comp.totalPages).toEqual(5);
      expect(nr0Button.nativeElement.innerHTML).toEqual('1');
      expect(nr1Button.nativeElement.innerHTML).toEqual('2');
      expect(nr2Button.nativeElement.innerHTML).toEqual('3');
      expect(nr3Button.nativeElement.innerHTML).toEqual('4');
      expect(nr4Button.nativeElement.innerHTML).toEqual('5');
      expect(nr5Button).toBeNull();
      expect(nr6Button).toBeNull();
      expect(nr7Button).toBeNull();

      comp.currentPage = 10;
      comp.ngOnChanges();
      fixture.detectChanges();
    });

    it('should render buttons with more than 8 ngx-forms', () => {
      let nr0Button;
      let nr1Button;
      let nr2Button;
      let nr3Button;
      let nr4Button;
      let nr5Button;
      let nr6Button;
      let nr7Button;

      comp.itemsPerPage = 5;
      comp.totalValues = 251;
      comp.currentPage = 1;

      comp.ngOnChanges();
      fixture.detectChanges();

      de = fixture.debugElement.query(By.css('.m-pagination'));
      el = de.nativeElement;

      nr0Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-0'));
      nr1Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-1'));
      nr2Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-2'));
      nr3Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-3'));
      nr4Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-4'));
      nr5Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-5'));
      nr6Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-6'));
      nr7Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-7'));
      expect(comp.totalPages).toEqual(51);
      expect(nr0Button.nativeElement.innerHTML).toEqual('1');
      expect(nr1Button.nativeElement.innerHTML).toEqual('2');
      expect(nr2Button.nativeElement.innerHTML).toEqual('3');
      expect(nr3Button.nativeElement.innerHTML).toEqual('4');
      expect(nr4Button.nativeElement.innerHTML).toEqual('5');
      expect(nr5Button.nativeElement.innerHTML).toEqual('...');
      expect(nr6Button.nativeElement.innerHTML).toEqual('51');

      comp.currentPage = 10;
      comp.ngOnChanges();
      fixture.detectChanges();

      nr0Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-0'));
      nr1Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-1'));
      nr2Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-2'));
      nr3Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-3'));
      nr4Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-4'));
      nr5Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-5'));
      nr6Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-6'));
      nr7Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-7'));
      expect(nr0Button.nativeElement.innerHTML).toEqual('1');
      expect(nr1Button.nativeElement.innerHTML).toEqual('...');
      expect(nr2Button.nativeElement.innerHTML).toEqual('9');
      expect(nr3Button.nativeElement.innerHTML).toEqual('10');
      expect(nr4Button.nativeElement.innerHTML).toEqual('11');
      expect(nr5Button.nativeElement.innerHTML).toEqual('...');
      expect(nr6Button.nativeElement.innerHTML).toEqual('51');

      comp.currentPage = 50;
      comp.ngOnChanges();
      fixture.detectChanges();

      nr0Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-0'));
      nr1Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-1'));
      nr2Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-2'));
      nr3Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-3'));
      nr4Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-4'));
      nr5Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-5'));
      nr6Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-6'));
      nr7Button = de.query(By.css('#pagination-' + comp.instanceId + '-button-7'));
      expect(nr0Button.nativeElement.innerHTML).toEqual('1');
      expect(nr1Button.nativeElement.innerHTML).toEqual('...');
      expect(nr2Button.nativeElement.innerHTML).toEqual('47');
      expect(nr3Button.nativeElement.innerHTML).toEqual('48');
      expect(nr4Button.nativeElement.innerHTML).toEqual('49');
      expect(nr5Button.nativeElement.innerHTML).toEqual('50');
      expect(nr6Button.nativeElement.innerHTML).toEqual('51');
    });
  });
});
