import { Component } from '@angular/core';
import {TraineeProfileDto} from "../model/TraineeProfileDto";
import {Router} from "@angular/router";



export interface TrainerInfo {
  name: string;
  specialization: string;


}

@Component({
  selector: 'app-trainee-profile',
  templateUrl: './trainee-profile.component.html',
  styleUrls: ['./trainee-profile.component.css']
})
export class TraineeProfileComponent {
  traineeProfile:TraineeProfileDto=new TraineeProfileDto();
  displayedColumns: string[] = ['name', 'specialization'];
  dataSource: TrainerInfo[]=[];
  constructor(private router:Router) {
  }

  ngOnInit() {
    const state = window.history.state;
    this.traineeProfile = state.traineeProfile;
    console.log(this.traineeProfile);
      if (this.traineeProfile.trainersList) {
        for (const trainer of this.traineeProfile.trainersList) {
          if (trainer.firstName && trainer.specialization) {
            this.dataSource.push({
              name: trainer.firstName,
              specialization: trainer.specialization,
            });
          }
        }
      }
    }



  editTrainers() {
    this.router.navigate(['edit-trainee-trainer'], { state: { traineeDetails: this.traineeProfile } });

  }

  updateTrainee() {
    this.router.navigate(['trainee-update'], { state: { traineeProfile: this.traineeProfile } });
  }

  updatePassword() {
    this.router.navigate(['update-password'], { state: { userName: this.traineeProfile.userName } });
  }


  viewTraining() {
    this.router.navigate(['trainee-trainings'], { state: { traineeProfile: this.traineeProfile } });

  }
}
