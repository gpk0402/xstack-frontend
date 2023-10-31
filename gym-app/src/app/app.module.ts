import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import { JoinUsComponent } from './join-us/join-us.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { InformationComponent } from './information/information.component';
import { TraineeRegistrationComponent } from './trainee-registration/trainee-registration.component';
import { TrainerRegistrationComponent } from './trainer-registration/trainer-registration.component';
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {HttpClientModule, HttpErrorResponse} from "@angular/common/http";
import { TraineeProfileComponent } from './trainee-profile/trainee-profile.component';
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';
import {MatTableModule} from "@angular/material/table";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { TraineeProfileUpdateComponent } from './trainee-profile-update/trainee-profile-update.component';
import { TrainerProfileUpdateComponent } from './trainer-profile-update/trainer-profile-update.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {PasswordUpdateComponent} from "./password-update/password-update.component";
import { TraineeTrainersComponent } from './trainee-trainers/trainee-trainers.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { AddTrainingComponent } from './add-training/add-training.component';
import { TraineeTrainingsLogsComponent } from './trainee-trainings-logs/trainee-trainings-logs.component';
import {TraineeNavbarComponent} from "./trainee-navbar/trainee-navbar.component";
import {TrainerNavbarComponent} from "./trainer-navbar/trainer-navbar.component";
import { TrainerTrainingsLogsComponent } from './trainer-trainings-logs/trainer-trainings-logs.component';
import {FooterComponent} from "./footer/footer.component";




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    JoinUsComponent,
    SignInComponent,
    InformationComponent,
    TraineeRegistrationComponent,
    TrainerRegistrationComponent,
    TraineeProfileComponent,
    TrainerProfileComponent,
    TraineeProfileUpdateComponent,
    TrainerProfileUpdateComponent,
    DialogBoxComponent,
    PasswordUpdateComponent,
    TraineeTrainersComponent,
    AddTrainingComponent,
    TraineeTrainingsLogsComponent,
    TraineeNavbarComponent,
    TrainerNavbarComponent,
    TrainerTrainingsLogsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule, MatSnackBarModule, HttpClientModule, MatDividerModule, MatIconModule, MatToolbarModule, BrowserAnimationsModule, MatCardModule, MatInputModule, MatDatepickerModule, FormsModule, MatNativeDateModule, MatSelectModule, MatRadioModule, ReactiveFormsModule, MatTableModule, MatSlideToggleModule, MatProgressSpinnerModule, MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
