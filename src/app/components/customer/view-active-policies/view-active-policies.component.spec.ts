import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivePoliciesComponent } from './view-active-policies.component';

describe('ViewActivePoliciesComponent', () => {
  let component: ViewActivePoliciesComponent;
  let fixture: ComponentFixture<ViewActivePoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewActivePoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewActivePoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
