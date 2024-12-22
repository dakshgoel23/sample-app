import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInspectionsHistoryComponent } from './view-inspections-history.component';

describe('ViewInspectionsHistoryComponent', () => {
  let component: ViewInspectionsHistoryComponent;
  let fixture: ComponentFixture<ViewInspectionsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewInspectionsHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInspectionsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
