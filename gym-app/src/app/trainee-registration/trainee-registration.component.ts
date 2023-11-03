import { Component } from '@angular/core';
import {Trainee} from "../model/Trainee";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TraineeService} from "../../service/trainee.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogBoxComponent} from "../dialog-box/dialog-box.component";
import { SnackBarService } from 'src/service/snack-bar.service';

@Component({
  selector: 'app-trainee-registration',
  templateUrl: './trainee-registration.component.html',
  styleUrls: ['./trainee-registration.component.css']
})
export class TraineeRegistrationComponent {
  trainee: Trainee=new Trainee();
  registrationForm: any;

  constructor(private traineeService:TraineeService,private router:Router,public dialog: MatDialog, private snackBarService: SnackBarService) {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if(!this.isValidEmailFormat(this.registrationForm.get('email').value)){
      this.snackBarService.openSnackBar("Invalid email format");
      return;
    }
    this.trainee.firstName=this.registrationForm.value.firstName;
    this.trainee.lastName=this.registrationForm.value.lastName;
    this.trainee.dateOfBirth=this.registrationForm.value.dateOfBirth;
    this.trainee.address=this.registrationForm.value.address;
    this.trainee.email=this.registrationForm.value.email;
    console.log(this.trainee);
    this.traineeService.saveTrainee(this.trainee).subscribe(data=>
    {
      console.log(data);
      this.dialog.open(DialogBoxComponent, {
        data: {username: data.username, password: data.password, userType:"trainee"}
      });
    })
  }

  
  isValidEmailFormat(email: string) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
}
