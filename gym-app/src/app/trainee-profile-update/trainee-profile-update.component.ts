import { Component } from '@angular/core';
import {TraineeUpdateDto} from "../model/TraineeUpdateDto";
import {TraineeProfileDto} from "../model/TraineeProfileDto";
import {Router} from "@angular/router";
import {TraineeService} from "../../service/trainee.service";
import {formatDate} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarService} from "../../service/snack-bar.service";

@Component({
  selector: 'app-trainee-profile-update',
  templateUrl: './trainee-profile-update.component.html',
  styleUrls: ['./trainee-profile-update.component.css']
})
export class TraineeProfileUpdateComponent {
  traineeProfile: TraineeProfileDto=new TraineeProfileDto();
  traineeUpdateDto :TraineeUpdateDto=new TraineeUpdateDto();

  constructor(private router:Router,private traineeService:TraineeService,private snackbarService: SnackBarService) {
  }
  ngOnInit() {
    const state = window.history.state;
    this.traineeProfile = state.traineeProfile;
    const dateObject = new Date(parseInt(this.traineeProfile.dateOfBirth[0]),parseInt(this.traineeProfile.dateOfBirth[1])-1,parseInt(this.traineeProfile.dateOfBirth[2]));
  }
    onSubmit() {
    this.traineeUpdateDto.username=this.traineeProfile.userName;
    this.traineeUpdateDto.firstName=this.traineeProfile.firstName
    this.traineeUpdateDto.lastName=this.traineeProfile.lastName
    this.traineeUpdateDto.dateOfBirth=this.traineeProfile.dateOfBirth;
    this.traineeUpdateDto.address=this.traineeProfile.address;
    this.traineeUpdateDto.email=this.traineeProfile.email;
    console.log("status"+this.traineeProfile.status);
    this.traineeUpdateDto.status=this.traineeProfile.status;
    console.log(this.traineeUpdateDto);
    this.traineeService.updateTraineeProfile(this.traineeUpdateDto).subscribe(data=>{
      if(data)
      {
        console.log(data);
        this.snackbarService.openSnackBar(`Trainee Profile Updated Successfully`);
        this.router.navigate(['trainee-profile'],{ state: { traineeProfile: this.traineeProfile } });
      }
      else if(data.error)
      {
        this.snackbarService.openSnackBar(`Enter Proper Trainee Details`);
      }

    })


    }

  backToProfile() {
    this.router.navigate(['trainee-profile'],{ state: { traineeProfile: this.traineeProfile } });
  }
}
