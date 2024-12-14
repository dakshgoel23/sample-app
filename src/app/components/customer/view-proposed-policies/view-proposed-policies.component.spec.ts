import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProposedPoliciesComponent } from './view-proposed-policies.component';

describe('ViewProposedPoliciesComponent', () => {
  let component: ViewProposedPoliciesComponent;
  let fixture: ComponentFixture<ViewProposedPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProposedPoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProposedPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
