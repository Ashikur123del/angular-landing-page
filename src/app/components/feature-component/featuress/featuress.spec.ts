import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Featuress } from './featuress';

describe('Featuress', () => {
  let component: Featuress;
  let fixture: ComponentFixture<Featuress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Featuress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Featuress);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
