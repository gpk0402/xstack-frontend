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
    this.trainerTrainingsForm = new FormGroup(
      {
        traineeName: new FormControl(''),
        traineeToggle: new FormControl(false),

        range: new FormGroup({
          start: new FormControl<Date | null>({value: null, disabled: true}),
          end: new FormControl<Date | null>({value: null, disabled: true}),
        }), // Set the initial disabled state
        dateToggle: new FormControl(false)
      }
    );


    this.trainerTrainingsForm.get('traineeToggle')?.valueChanges.subscribe((value: any) => {
      if (value) {
        this.trainerTrainingsForm.get('traineeName')?.enable();

      } else {
        this.trainerTrainingsForm.get('traineeName')?.disable();
      }
    });
    this.trainerTrainingsForm.get('dateToggle')?.valueChanges.subscribe((value: any) => {
      if (value) {
        this.trainerTrainingsForm.get('range')?.enable();
      } else {
        this.trainerTrainingsForm.get('range')?.disable();
      }
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

    if(this.trainerTrainingsForm.value.traineeToggle){

      this.trainerTrainingsList.traineeName=this.trainerTrainingsForm.value.traineeName
    }

    if(this.trainerTrainingsForm.value.dateToggle){
      const startDate = this.trainerTrainingsForm.get('range.start')?.value;
      const endDate = this.trainerTrainingsForm.get('range.end')?.value;
      if (startDate && endDate) {
        const formattedStartDate = formatDate(startDate, 'yyyy-MM-dd', 'en');
        const formattedEndDate = formatDate(endDate, 'yyyy-MM-dd', 'en');
        this.trainerTrainingsList.periodFrom = formattedStartDate;
        this.trainerTrainingsList.periodTo = formattedEndDate;
      }

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
}
