import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareVideoDemo } from './share-video-demo';

describe('ShareVideoDemo', () => {
  let component: ShareVideoDemo;
  let fixture: ComponentFixture<ShareVideoDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareVideoDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareVideoDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
