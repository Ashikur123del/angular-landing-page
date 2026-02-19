import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprotsAIHelpDesk } from './supprots-ai-help-desk';

describe('SupprotsAIHelpDesk', () => {
  let component: SupprotsAIHelpDesk;
  let fixture: ComponentFixture<SupprotsAIHelpDesk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupprotsAIHelpDesk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprotsAIHelpDesk);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
