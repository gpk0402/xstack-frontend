import { Component } from '@angular/core';
import {Trainer} from "../model/Trainer";
import {TraineeService} from "../../service/trainee.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TrainerService} from "../../service/trainer.service";
import {DialogBoxComponent} from "../dialog-box/dialog-box.component";
interface Specialization {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-trainer-registration',
  templateUrl: './trainer-registration.component.html',
  styleUrls: ['./trainer-registration.component.css']
})
export class TrainerRegistrationComponent {
  trainer:Trainer=new Trainer();
  specializations: Specialization[] = [
    {value: 'fitness', viewValue: 'fitness'},
    {value: 'yoga', viewValue: 'yoga'},
    {value: 'Zumba', viewValue: 'Zumba'},
    {value: 'stretching', viewValue: 'stretching'},
    {value: 'resistance', viewValue: 'resistance'},
  ];
  registrationForm: any;

  constructor(private trainerService:TrainerService,private router:Router,public dialog: MatDialog) {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      specialization: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    this.trainer.firstName=this.registrationForm.value.firstName;
    this.trainer.lastName=this.registrationForm.value.lastName;
    this.trainer.specialization=this.registrationForm.value.specialization;
    console.log(this.registrationForm.value.trainingType);
    this.trainer.email=this.registrationForm.value.email;
    this.trainerService.saveTrainer(this.trainer).subscribe(data=>{
      console.log(data);
      this.dialog.open(DialogBoxComponent, {
        data: {username: data.username, password: data.password}
      });
    })
  }
}
