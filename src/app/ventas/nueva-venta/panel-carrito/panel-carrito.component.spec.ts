import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCarritoComponent } from './panel-carrito.component';

describe('PanelCarritoComponent', () => {
  let component: PanelCarritoComponent;
  let fixture: ComponentFixture<PanelCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
