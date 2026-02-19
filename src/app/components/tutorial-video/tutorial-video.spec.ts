import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialVideo } from './tutorial-video';

describe('TutorialVideo', () => {
  let component: TutorialVideo;
  let fixture: ComponentFixture<TutorialVideo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialVideo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialVideo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
