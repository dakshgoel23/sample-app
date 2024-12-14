import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveInspectionSidebarComponent } from './executive-inspection-sidebar.component';

describe('ExecutiveInspectionSidebarComponent', () => {
  let component: ExecutiveInspectionSidebarComponent;
  let fixture: ComponentFixture<ExecutiveInspectionSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutiveInspectionSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutiveInspectionSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
