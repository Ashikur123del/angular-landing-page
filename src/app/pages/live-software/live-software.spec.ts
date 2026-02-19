import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveSoftware } from './live-software';

describe('LiveSoftware', () => {
  let component: LiveSoftware;
  let fixture: ComponentFixture<LiveSoftware>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveSoftware]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveSoftware);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
