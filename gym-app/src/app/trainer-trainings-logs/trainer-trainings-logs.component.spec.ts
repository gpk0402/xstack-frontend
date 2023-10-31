import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerTrainingsLogsComponent } from './trainer-trainings-logs.component';

describe('TrainerTrainingsLogsComponent', () => {
  let component: TrainerTrainingsLogsComponent;
  let fixture: ComponentFixture<TrainerTrainingsLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainerTrainingsLogsComponent]
    });
    fixture = TestBed.createComponent(TrainerTrainingsLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
