import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdumanCustomerSupport } from './eduman-customer-support';

describe('EdumanCustomerSupport', () => {
  let component: EdumanCustomerSupport;
  let fixture: ComponentFixture<EdumanCustomerSupport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdumanCustomerSupport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdumanCustomerSupport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
