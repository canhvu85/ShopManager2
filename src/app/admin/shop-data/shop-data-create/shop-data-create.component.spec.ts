import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDataCreateComponent } from './shop-data-create.component';

describe('ShopDataCreateComponent', () => {
  let component: ShopDataCreateComponent;
  let fixture: ComponentFixture<ShopDataCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDataCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDataCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
