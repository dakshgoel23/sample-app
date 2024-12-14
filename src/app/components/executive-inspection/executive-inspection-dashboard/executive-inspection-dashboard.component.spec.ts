import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveInspectionDashboardComponent } from './executive-inspection-dashboard.component';

describe('ExecutiveInspectionDashboardComponent', () => {
  let component: ExecutiveInspectionDashboardComponent;
  let fixture: ComponentFixture<ExecutiveInspectionDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutiveInspectionDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutiveInspectionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
