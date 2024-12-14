import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompletedInspectionsComponent } from './view-completed-inspections.component';

describe('ViewCompletedInspectionsComponent', () => {
  let component: ViewCompletedInspectionsComponent;
  let fixture: ComponentFixture<ViewCompletedInspectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCompletedInspectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCompletedInspectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
