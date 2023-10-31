import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SigninService} from "../../service/signin.service";
import {CredentialsDto} from "../model/CredentialsDto";
import {TraineeService} from "../../service/trainee.service";
import {TrainerService} from "../../service/trainer.service";
import {TraineeProfileDto} from "../model/TraineeProfileDto";
import {TrainerProfileDto} from "../model/TrainerProfileDto";
import {Router} from "@angular/router";
import {SnackBarService} from "../../service/snack-bar.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  credentials:CredentialsDto=new CredentialsDto();
  loginForm:any
  selectedUserType: string = 'trainee';



  constructor(private router:Router,private snackbarService: SnackBarService,private signInService:SigninService,private traineeService:TraineeService,private trainerService:TrainerService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    this.credentials.username=this.loginForm.value.username;
    this.credentials.password=this.loginForm.value.password;
    this.signInService.userAuthentication(this.credentials).subscribe(data=>{
      console.log(data);
        if(this.selectedUserType=='trainer')
        {
          this.trainerService.getTrainerProfile(this.credentials.username).subscribe(data=>{
              let trainerProfile:TrainerProfileDto=data;
             this.router.navigate(['trainer-profile'], { state: { trainerProfile } });
          },error => {
            this.snackbarService.openSnackBar(`Trainer with username ${this.credentials.username} not found.`);
            }
          );
        }
        else if(this.selectedUserType=='trainee'){
        this.traineeService.getTraineeProfile(this.credentials.username).subscribe(data=>{
            let traineeProfile:TraineeProfileDto=data;
            console.log(data);
            this.router.navigate(['trainee-profile'], { state: { traineeProfile } });
          //}
        },error => {
          this.snackbarService.openSnackBar(`Trainee with username ${this.credentials.username} not found.`);
        });
        }
      },error => {
      this.snackbarService.openSnackBar(`Enter Valid Username and Password`);
    });




  }
}
