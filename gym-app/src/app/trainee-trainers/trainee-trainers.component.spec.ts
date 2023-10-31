import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeTrainersComponent } from './trainee-trainers.component';

describe('TraineeTrainersComponent', () => {
  let component: TraineeTrainersComponent;
  let fixture: ComponentFixture<TraineeTrainersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraineeTrainersComponent]
    });
    fixture = TestBed.createComponent(TraineeTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
