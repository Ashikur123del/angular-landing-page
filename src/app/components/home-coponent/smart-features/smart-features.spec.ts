import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartFeatures } from './smart-features';

describe('SmartFeatures', () => {
  let component: SmartFeatures;
  let fixture: ComponentFixture<SmartFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartFeatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartFeatures);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
