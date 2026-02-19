import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoShowcaseSection } from './video-showcase-section';

describe('VideoShowcaseSection', () => {
  let component: VideoShowcaseSection;
  let fixture: ComponentFixture<VideoShowcaseSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoShowcaseSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoShowcaseSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
