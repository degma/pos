import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasDiaDetalleComponent } from './ventas-dia-detalle.component';

describe('VentasDiaDetalleComponent', () => {
  let component: VentasDiaDetalleComponent;
  let fixture: ComponentFixture<VentasDiaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasDiaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasDiaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
