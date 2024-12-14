import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllpoliciesComponent } from './view-allpolicies.component';

describe('ViewAllpoliciesComponent', () => {
  let component: ViewAllpoliciesComponent;
  let fixture: ComponentFixture<ViewAllpoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllpoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllpoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
