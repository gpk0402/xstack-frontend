import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SigninService} from "../../service/signin.service";
import {SnackBarService} from "../../service/snack-bar.service";
import {UpdatePassword} from "../model/UpdatePassword";
import {TraineeProfileDto} from "../model/TraineeProfileDto";

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.css']
})
export class PasswordUpdateComponent {


  userNameFromState : string | undefined ;

  changePasswordForm: any;

  constructor(private router: Router, private signinService:SigninService, private snackBar: SnackBarService) {
    this.changePasswordForm = new FormGroup(
      {
        username: new FormControl('', Validators.required),
        oldPassword: new FormControl('', Validators.required),
        newPassword: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/)]),
        confirmPassword: new FormControl('', Validators.required)
      }
    );
  }

  ngOnInit() {
    const state = window.history.state;
    this.userNameFromState = state.userName;
    console.log(state.username);
    this.changePasswordForm.get('username')?.setValue(this.userNameFromState);
    console.log("specialization "+this.username)
  }

  onSubmit() {
    console.log(this.changePasswordForm.value);
    console.log(this.changePasswordForm.value.username);
    console.log(this.changePasswordForm.value.password);



    let updatePassword : UpdatePassword = new UpdatePassword();
      updatePassword.userName =this.userNameFromState;
      updatePassword.oldPassword = this.changePasswordForm.value.oldPassword;
      updatePassword.newPassword = this.changePasswordForm.value.newPassword;


    this.signinService.updateCredentials(updatePassword).subscribe(data => {
      this.snackBar.openSnackBar("Password updated succesfully, Please log-in again", 10000);
      this.router.navigate(['signIn']);
    });
          // },error => {
          //   this.snackBar.openSnackBar("Unable to update password, please verify your credentials",1500);
          //   // this.router.navigate(['sign-in']);
          // });


  }

  hideOldPassword = true;

  hideNewPassword : boolean = true;


  toggleOldPasswordVisibility($event : Event) {
    this.hideOldPassword = !this.hideOldPassword;
    $event.preventDefault();
  }

  toggleNewPasswordVisibility($event : Event) {
    this.hideNewPassword = !this.hideNewPassword;
    $event.preventDefault();
  }

  get username() {
    return this.changePasswordForm.get('username');
  }

  get oldPassword() {
    return this.changePasswordForm.get('oldPassword');
  }

  get newPassword() {
    return this.changePasswordForm.get('newPassword');
  }

  get confirmPassword() {
    return this.changePasswordForm.get('confirmPassword');
  }
}
