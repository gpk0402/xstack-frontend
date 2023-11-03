import { Component } from '@angular/core';
import {formatDate} from "@angular/common";
import {TrainerProfileDto} from "../model/TrainerProfileDto";
import {TrainerTrainingsRequestList} from "../model/TrainerTrainingsRequestList";
import {TrainingDto} from "../model/TrainingDto";
import {TraineeDetailsDto} from "../model/TraineeDetailsDto";
import {Router} from "@angular/router";
import {TrainerService} from "../../service/trainer.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-trainer-trainings-logs',
  templateUrl: './trainer-trainings-logs.component.html',
  styleUrls: ['./trainer-trainings-logs.component.css']
})
export class TrainerTrainingsLogsComponent {
  trainerProfile=new TrainerProfileDto();
  trainerTrainingsList=new TrainerTrainingsRequestList();
  trainerTrainingsForm: any;
  trainingData: TrainingDto[] = [];
  displayedColumns: string[] = ['traineeUserName', 'trainerUsername','trainingDate', 'trainingDuration', 'trainingName', 'trainingType'];
  traineeList: TraineeDetailsDto[] = [];

  constructor(private router: Router,private trainerService:TrainerService,private fb: FormBuilder) {
    this.trainerTrainingsForm = this.fb.group({
      traineeName: [null],
      range: this.fb.group({
        start: [null],
        end: [null],
      }),
    });
  }

  ngOnInit() {
    const state = window.history.state;
    if (state && state.trainerProfile) {
      this.trainerProfile=state.trainerProfile;
    }
    if (this.trainerProfile.traineesList) {
      this.traineeList =this.trainerProfile.traineesList
    }
  }
  onSubmit() {
    this.trainerTrainingsList = new TrainerTrainingsRequestList();
    this.trainerTrainingsList.username=this.trainerProfile.userName;

    if(this.trainerTrainingsForm.value.traineeName){

      this.trainerTrainingsList.traineeName=this.trainerTrainingsForm.value.traineeName
    }

    const startDate = this.trainerTrainingsForm.get('range.start')?.value;
    const endDate = this.trainerTrainingsForm.get('range.end')?.value;

    if (startDate && endDate) {
      const formattedStartDate = formatDate(startDate, 'yyyy-MM-dd', 'en');
      const formattedEndDate = formatDate(endDate, 'yyyy-MM-dd', 'en');
      this.trainerTrainingsList.periodFrom = formattedStartDate;
      this.trainerTrainingsList.periodTo = formattedEndDate;
    }



    this.trainerService.getTrainerTrainings(this.trainerTrainingsList).subscribe(data=>{
      console.log(data)
      if(data.error)
      {

      }
      else{
        this.trainingData=data;
        console.log(data)
      }
    })
  }

  backToProfile() {
    this.router.navigate(['trainer-profile'], { state: { trainerProfile: this.trainerProfile } });
  }

  resetForm(event: Event) {
    event.preventDefault();
    this.trainerTrainingsForm.reset();
  }
}
