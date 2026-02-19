import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyEdumanIsTheTrustedChoice } from './why-eduman-is-the-trusted-choice';

describe('WhyEdumanIsTheTrustedChoice', () => {
  let component: WhyEdumanIsTheTrustedChoice;
  let fixture: ComponentFixture<WhyEdumanIsTheTrustedChoice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyEdumanIsTheTrustedChoice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyEdumanIsTheTrustedChoice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
