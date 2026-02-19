import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyEduman } from './why-eduman';

describe('WhyEduman', () => {
  let component: WhyEduman;
  let fixture: ComponentFixture<WhyEduman>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyEduman]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyEduman);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
