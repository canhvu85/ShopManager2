import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillFormCreateComponent } from './bill-form-create.component';

describe('BillFormCreateComponent', () => {
  let component: BillFormCreateComponent;
  let fixture: ComponentFixture<BillFormCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillFormCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
