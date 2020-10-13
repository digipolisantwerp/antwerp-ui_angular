import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, ComponentFactory, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {TableCellComponent} from './table-cell.component';
import {Cell} from '../../types/table.types';
import {TableHelperService} from '../../services/table-helper.service';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';

// ---------- DUMMY COMPONENT ----------- //
@Component({
  selector: 'aui-dummy-test',
  template: '<div class="dummy-test">Test</div>',
})
export class DummyTestComponent implements Cell {
  data: any;
}

describe('The Table Cell Component without component', () => {
  let component: TableCellComponent;
  let fixture: ComponentFixture<TableCellComponent>;
  let factory: ComponentFactoryResolver;
  let viewContainer: ViewContainerRef;
  let componentFactory: ComponentFactory<Cell>;
  let instance: DummyTestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        TableHelperService,
        {
          provide: ViewContainerRef,
          useValue: {
            createComponent: sinon.stub(),
            clear: sinon.stub()
          }
        },
        {
          provide: ComponentFactoryResolver,
          useValue: {
            resolveComponentFactory: sinon.stub()
          }
        }
      ],
      declarations: [
        TableCellComponent,
        DummyTestComponent
      ],
    }).compileComponents();

    componentFactory = {name: 'some testing factory'} as any;
    instance = new DummyTestComponent();
    fixture = TestBed.createComponent(TableCellComponent);
    component = fixture.componentInstance; // BannerComponent test instance
    viewContainer = TestBed.get(ViewContainerRef);
    factory = TestBed.get(ComponentFactoryResolver);
  });

  it('should create a component using only the component constructor type', () => {

    (viewContainer.createComponent as SinonStub).withArgs(componentFactory).returns({
      instance
    });
    (factory.resolveComponentFactory as SinonStub).withArgs(DummyTestComponent).returns(componentFactory);
    component.viewContainerRef = viewContainer;
    component.value = 'some testing here';
    const ref = component.loadComponent(DummyTestComponent);
    expect(ref.instance).toBe(instance);
    expect(ref.instance.data).toBe('some testing here');
    expect(ref.instance.metadata).toBeUndefined();
    expect((viewContainer.clear as SinonStub).calledOnce).toBe(true);
  });

  it('should create a component using contructor and metadata', () => {
    (viewContainer.createComponent as SinonStub).withArgs(componentFactory).returns({
      instance
    });
    (factory.resolveComponentFactory as SinonStub).withArgs(DummyTestComponent).returns(componentFactory);
    component.viewContainerRef = viewContainer;
    component.value = 'some testing here';
    const ref = component.loadComponent({
      instance: DummyTestComponent,
      metadata: 'some-meta-data'
    });
    expect(ref.instance).toBe(instance);
    expect(ref.instance.data).toBe('some testing here');
    expect(ref.instance.metadata).toBe('some-meta-data');
    expect((viewContainer.clear as SinonStub).calledOnce).toBe(true);
  });
});
