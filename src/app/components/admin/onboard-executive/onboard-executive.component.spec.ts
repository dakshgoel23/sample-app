import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardExecutiveComponent } from './onboard-executive.component';

describe('OnboardExecutiveComponent', () => {
  let component: OnboardExecutiveComponent;
  let fixture: ComponentFixture<OnboardExecutiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardExecutiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardExecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
