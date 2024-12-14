import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveInsuranceMyprofileComponent } from './executive-insurance-myprofile.component';

describe('ExecutiveInsuranceMyprofileComponent', () => {
  let component: ExecutiveInsuranceMyprofileComponent;
  let fixture: ComponentFixture<ExecutiveInsuranceMyprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutiveInsuranceMyprofileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutiveInsuranceMyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
