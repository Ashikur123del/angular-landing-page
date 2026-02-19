import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolMangmentVideo } from './school-mangment-video';

describe('SchoolMangmentVideo', () => {
  let component: SchoolMangmentVideo;
  let fixture: ComponentFixture<SchoolMangmentVideo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolMangmentVideo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolMangmentVideo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
