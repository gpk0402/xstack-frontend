import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeProfileUpdateComponent } from './trainee-profile-update.component';

describe('TraineeProfileUpdateComponent', () => {
  let component: TraineeProfileUpdateComponent;
  let fixture: ComponentFixture<TraineeProfileUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraineeProfileUpdateComponent]
    });
    fixture = TestBed.createComponent(TraineeProfileUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
