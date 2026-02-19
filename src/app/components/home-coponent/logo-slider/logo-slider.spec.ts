import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSlider } from './logo-slider';

describe('LogoSlider', () => {
  let component: LogoSlider;
  let fixture: ComponentFixture<LogoSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoSlider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
