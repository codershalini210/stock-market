import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMini } from './product-mini';

describe('ProductMini', () => {
  let component: ProductMini;
  let fixture: ComponentFixture<ProductMini>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductMini]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMini);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
