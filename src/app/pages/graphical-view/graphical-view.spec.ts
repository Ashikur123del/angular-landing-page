import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicalView } from './graphical-view';

describe('GraphicalView', () => {
  let component: GraphicalView;
  let fixture: ComponentFixture<GraphicalView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicalView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicalView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
