import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideLogoItem } from './slide-logo-item';

describe('SlideLogoItem', () => {
  let component: SlideLogoItem;
  let fixture: ComponentFixture<SlideLogoItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideLogoItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideLogoItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
