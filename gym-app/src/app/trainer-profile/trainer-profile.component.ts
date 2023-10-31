import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TrainerProfileDto} from "../model/TrainerProfileDto";
import {TrainerService} from "../../service/trainer.service";
export interface TrainerInfo {
  username: string;
  firstname: string;
  lastname: string;


}

const ELEMENT_DATA: TrainerInfo[] = [
  {username: 'sreeja2401', firstname: 'sreeja', lastname: 'mangarapu'},
  {username: 'siddu2401', firstname: 'siddu', lastname: 'mangarapu'},
  {username: 'lavs2401', firstname: 'lavanya', lastname: 'mangarapu'},
];
@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.css']
})
export class TrainerProfileComponent {
  displayedColumns: string[] = ['username', 'firstname', 'lastname'];
  dataSource: TrainerInfo[]=[];

  constructor(private router:Router,private trainerService:TrainerService) {
  }

  trainerProfile : TrainerProfileDto =new TrainerProfileDto();

  ngOnInit() {
    const state = window.history.state;
    this.trainerProfile = state.trainerProfile;
    console.log("we are inside my profile component " + this.trainerProfile);
    if (this.trainerProfile.traineesList) {
      for (const trainee of this.trainerProfile.traineesList) {
        if (trainee.firstName && trainee.userName && trainee.lastName) {
          this.dataSource.push({
            username: trainee.userName,
            firstname:trainee.firstName,
            lastname:trainee.lastName
          });
        }
      }
    }
  }

    updateTrainer() {
      this.router.navigate(['trainer-update'], { state: { trainerProfile: this.trainerProfile } });
    }

  updatePassword() {
    this.router.navigate(['update-password'], { state: { username: this.trainerProfile.userName } });
  }

  addTraining() {
    this.router.navigate(['addTraining'], { state: { trainerProfile: this.trainerProfile } });
  }

  viewTrainings() {
    this.router.navigate(['trainer-trainings'], { state: { trainerProfile: this.trainerProfile } });
  }
}
