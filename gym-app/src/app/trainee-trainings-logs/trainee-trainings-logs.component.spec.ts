import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeTrainingsLogsComponent } from './trainee-trainings-logs.component';

describe('TraineeTrainingsLogsComponent', () => {
  let component: TraineeTrainingsLogsComponent;
  let fixture: ComponentFixture<TraineeTrainingsLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraineeTrainingsLogsComponent]
    });
    fixture = TestBed.createComponent(TraineeTrainingsLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
