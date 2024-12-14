import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllusersComponent } from './view-allusers.component';

describe('ViewAllusersComponent', () => {
  let component: ViewAllusersComponent;
  let fixture: ComponentFixture<ViewAllusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllusersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
