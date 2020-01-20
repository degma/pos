import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminValoresComponent } from './admin-valores.component';

describe('AdminValoresComponent', () => {
  let component: AdminValoresComponent;
  let fixture: ComponentFixture<AdminValoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminValoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminValoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
