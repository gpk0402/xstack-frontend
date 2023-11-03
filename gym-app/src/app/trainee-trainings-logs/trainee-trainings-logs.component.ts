import { Component } from '@angular/core';
import { TraineeProfileDto } from "../model/TraineeProfileDto";
import { TraineeTrainingsRequestList } from "../model/TraineeTrainingsRequestList";
import { TrainerDetailsDto } from "../model/TrainerDetailsDto";
import { TrainingDto } from "../model/TrainingDto";
import { Router } from "@angular/router";
import { TraineeService } from "../../service/trainee.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { formatDate } from "@angular/common";

interface Specialization {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-trainee-trainings-logs',
  templateUrl: './trainee-trainings-logs.component.html',
  styleUrls: ['./trainee-trainings-logs.component.css']
})
export class TraineeTrainingsLogsComponent {
  specializations: Specialization[] = [
    { value: 'fitness', viewValue: 'fitness' },
    { value: 'yoga', viewValue: 'yoga' },
    { value: 'zumba', viewValue: 'Zumba' },
    { value: 'stretching', viewValue: 'stretching' },
    { value: 'resistance', viewValue: 'resistance' },
  ];

  traineeProfile = new TraineeProfileDto();
  traineeTrainingsList = new TraineeTrainingsRequestList();
  trainerList: TrainerDetailsDto[] = [];
  traineeTrainingsForm: FormGroup;
  trainingData: TrainingDto[] = [];
  displayedColumns: string[] = ['traineeUserName', 'trainerUsername', 'trainingDate', 'trainingDuration', 'trainingName', 'trainingType'];

  constructor(private router: Router, private traineeService: TraineeService, private fb: FormBuilder) {
    this.traineeTrainingsForm = this.fb.group({
      trainerName: [null],
      trainingType: [null],
      range: this.fb.group({
        start: [null],
        end: [null],
      }),
    });
  }

  ngOnInit() {
    const state = window.history.state;
    if (state && state.traineeProfile) {
      this.traineeProfile = state.traineeProfile;
    }
    if (this.traineeProfile.trainersList) {
      this.trainerList = this.traineeProfile.trainersList;
    }
  }

  onSubmit() {
    this.traineeTrainingsList = new TraineeTrainingsRequestList();
    this.traineeTrainingsList.username = this.traineeProfile.userName;

    if (this.traineeTrainingsForm.value.trainerName) {
      this.traineeTrainingsList.trainerName = this.traineeTrainingsForm.value.trainerName;
    }

    const startDate = this.traineeTrainingsForm.get('range.start')?.value;
    const endDate = this.traineeTrainingsForm.get('range.end')?.value;

    if (startDate && endDate) {
      const formattedStartDate = formatDate(startDate, 'yyyy-MM-dd', 'en');
      const formattedEndDate = formatDate(endDate, 'yyyy-MM-dd', 'en');
      this.traineeTrainingsList.periodFrom = formattedStartDate;
      this.traineeTrainingsList.periodTo = formattedEndDate;
    }

    if (this.traineeTrainingsForm.value.trainingType) {
      this.traineeTrainingsList.trainingType = this.traineeTrainingsForm.value.trainingType;
    }

    this.traineeService.getTraineeTrainings(this.traineeTrainingsList).subscribe(data => {
      if (data.error) {
      } else {
        this.trainingData = data;
        console.log(data);
      }
    });
  }

  backToProfile() {
    this.router.navigate(['trainee-profile'], { state: { traineeProfile: this.traineeProfile } });
  }

  resetForm(event: Event) {
    event.preventDefault();
    this.traineeTrainingsForm.reset();
  }
  
  
}
