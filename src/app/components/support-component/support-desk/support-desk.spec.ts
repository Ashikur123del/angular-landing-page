import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportDesk } from './support-desk';

describe('SupportDesk', () => {
  let component: SupportDesk;
  let fixture: ComponentFixture<SupportDesk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportDesk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportDesk);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
