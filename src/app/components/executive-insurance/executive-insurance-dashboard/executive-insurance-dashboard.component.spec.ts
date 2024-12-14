import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveInsuranceDashboardComponent } from './executive-insurance-dashboard.component';

describe('ExecutiveInsuranceDashboardComponent', () => {
  let component: ExecutiveInsuranceDashboardComponent;
  let fixture: ComponentFixture<ExecutiveInsuranceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutiveInsuranceDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutiveInsuranceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
