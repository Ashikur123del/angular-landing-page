import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoVideo } from './demo-video';

describe('DemoVideo', () => {
  let component: DemoVideo;
  let fixture: ComponentFixture<DemoVideo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoVideo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoVideo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
