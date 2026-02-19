import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduWebDynamicsList } from './edu-web-dynamics-list';

describe('EduWebDynamicsList', () => {
  let component: EduWebDynamicsList;
  let fixture: ComponentFixture<EduWebDynamicsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EduWebDynamicsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduWebDynamicsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
