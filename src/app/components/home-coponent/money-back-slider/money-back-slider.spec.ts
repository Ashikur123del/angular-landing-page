import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyBackSlider } from './money-back-slider';

describe('MoneyBackSlider', () => {
  let component: MoneyBackSlider;
  let fixture: ComponentFixture<MoneyBackSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyBackSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyBackSlider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
