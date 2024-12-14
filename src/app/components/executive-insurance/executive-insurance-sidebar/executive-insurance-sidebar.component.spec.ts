import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveInsuranceSidebarComponent } from './executive-insurance-sidebar.component';

describe('ExecutiveInsuranceSidebarComponent', () => {
  let component: ExecutiveInsuranceSidebarComponent;
  let fixture: ComponentFixture<ExecutiveInsuranceSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutiveInsuranceSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutiveInsuranceSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
