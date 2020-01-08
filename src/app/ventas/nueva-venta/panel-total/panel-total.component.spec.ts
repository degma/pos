import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTotalComponent } from './panel-total.component';

describe('PanelTotalComponent', () => {
  let component: PanelTotalComponent;
  let fixture: ComponentFixture<PanelTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
