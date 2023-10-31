import { Component } from '@angular/core';
import {TrainerProfileDto} from "../model/TrainerProfileDto";
import {TrainerUpdateDto} from "../model/TrainerUpdateDto";
import {Router} from "@angular/router";
import {TrainerService} from "../../service/trainer.service";
import {SnackBarService} from "../../service/snack-bar.service";

@Component({
  selector: 'app-trainer-profile-update',
  templateUrl: './trainer-profile-update.component.html',
  styleUrls: ['./trainer-profile-update.component.css']
})
export class TrainerProfileUpdateComponent {
  trainer:TrainerProfileDto=new TrainerProfileDto();
  traineeUpdateProfile:TrainerUpdateDto=new TrainerUpdateDto();
  toggleValue: boolean=true;

  constructor(private router:Router,private trainerService:TrainerService,private snackbarService:SnackBarService) {
  }
  ngOnInit() {
    const state = window.history.state;
    this.trainer = state.trainerProfile;
  }
  onToggleChange() {
    console.log('Toggle value:', this.toggleValue);
    // Perform actions based on the toggle value
  }
  onSubmit() {
    console.log(this.trainer);
    this.traineeUpdateProfile.username=this.trainer.userName;
    this.traineeUpdateProfile.firstName=this.trainer.firstName;
    this.traineeUpdateProfile.lastName=this.trainer.lastName;
    this.traineeUpdateProfile.specialization=this.trainer.specialization;
    this.traineeUpdateProfile.email=this.trainer.email;
    this.traineeUpdateProfile.status=this.trainer.status;
    this.trainerService.updateTraineeProfile(this.traineeUpdateProfile).subscribe(data=>{
      if(data)
      {
        console.log(data);
        this.snackbarService.openSnackBar(`Trainer Profile Updated Successfully`);
        this.router.navigate(['trainer-profile'],{ state: { trainerProfile: this.trainer } });
      }
    })
  }

  backToProfile() {
    this.router.navigate(['trainer-profile'],{ state: { trainerProfile: this.trainer } });
  }
}
