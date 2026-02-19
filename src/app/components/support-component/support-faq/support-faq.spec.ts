import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportFaq } from './support-faq';

describe('SupportFaq', () => {
  let component: SupportFaq;
  let fixture: ComponentFixture<SupportFaq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportFaq]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportFaq);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
