import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureWalkthrough } from './feature-walkthrough';

describe('FeatureWalkthrough', () => {
  let component: FeatureWalkthrough;
  let fixture: ComponentFixture<FeatureWalkthrough>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureWalkthrough]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureWalkthrough);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
