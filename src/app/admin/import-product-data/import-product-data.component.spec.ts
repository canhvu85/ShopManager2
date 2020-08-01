import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportProductDataComponent } from './import-product-data.component';

describe('ImportProductDataComponent', () => {
  let component: ImportProductDataComponent;
  let fixture: ComponentFixture<ImportProductDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportProductDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportProductDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
