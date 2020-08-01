import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportProductFormCreateComponent } from './import-product-form-create.component';

describe('ImportProductFormCreateComponent', () => {
  let component: ImportProductFormCreateComponent;
  let fixture: ComponentFixture<ImportProductFormCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportProductFormCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportProductFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
