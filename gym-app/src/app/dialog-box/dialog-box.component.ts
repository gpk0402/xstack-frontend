import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { SharedLoginService } from 'src/service/shared-login.service';
import { SigninService } from 'src/service/signin.service';
import { TraineeService } from 'src/service/trainee.service';
import { CredentialsDto } from '../model/CredentialsDto';
import { TrainerService } from 'src/service/trainer.service';
import { TrainerProfileDto } from '../model/TrainerProfileDto';
import { TraineeProfileDto } from '../model/TraineeProfileDto';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {
  username: string = "";
  password: string = "";
  userType: string = "";
  credentials:CredentialsDto=new CredentialsDto();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private router:Router,private sharedLoginService: SharedLoginService,private signInService: SigninService ,private traineeService: TraineeService, private trainerService: TrainerService) {
    if (data) {
      this.username = data.username;
      this.password = data.password;
      this.userType = data.userType;
    }
  }

  redirectToLogin() {
    this.credentials.username=this.username;
    this.credentials.password=this.password;
    this.signInService.userAuthentication(this.credentials).subscribe(data=>{
      if(this.userType=='trainer')
      {
        this.trainerService.getTrainerProfile(this.credentials.username).subscribe(data=>{
            let trainerProfile:TrainerProfileDto = data;
           this.router.navigate(['trainer-profile'], { state: { trainerProfile } });
        });
      }
      else if(this.userType=='trainee'){
      this.traineeService.getTraineeProfile(this.credentials.username).subscribe(data=>{
          let traineeProfile:TraineeProfileDto=data;
          console.log(data);
          this.router.navigate(['trainee-profile'], { state: { traineeProfile } });
        //}
      });
      }
    });

    // if (this.data.userType === 'trainer') {
    //   console.log("trainer")
    //   this.sharedLoginService.setUserData({ username:this.username, password:this.password, userType:this.userType});
    //   this.router.navigate(['/signIn']); // Redirect to the trainer login page
    // } else if (this.data.userType === 'trainee') {

    //   console.log("trainee");
    //   this.sharedLoginService.setUserData({ username:this.username, password:this.password, userType:this.userType});
    //   this.router.navigate(['/signIn']); // Redirect to the trainee login page
    // }
  }
}
