import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposePolicyComponent } from './propose-policy.component';

describe('ProposePolicyComponent', () => {
  let component: ProposePolicyComponent;
  let fixture: ComponentFixture<ProposePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProposePolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
