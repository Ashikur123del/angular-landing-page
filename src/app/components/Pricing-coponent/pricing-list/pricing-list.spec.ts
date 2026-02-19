import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingList } from './pricing-list';

describe('PricingList', () => {
  let component: PricingList;
  let fixture: ComponentFixture<PricingList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
