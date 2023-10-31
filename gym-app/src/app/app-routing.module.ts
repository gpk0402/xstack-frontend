import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {JoinUsComponent} from "./join-us/join-us.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {InformationComponent} from "./information/information.component";
import {TraineeRegistrationComponent} from "./trainee-registration/trainee-registration.component";
import {TrainerRegistrationComponent} from "./trainer-registration/trainer-registration.component";
import {TraineeProfileComponent} from "./trainee-profile/trainee-profile.component";
import {TrainerProfileComponent} from "./trainer-profile/trainer-profile.component";
import {TraineeProfileUpdateComponent} from "./trainee-profile-update/trainee-profile-update.component";
import {DialogBoxComponent} from "./dialog-box/dialog-box.component";
import {TrainerProfileUpdateComponent} from "./trainer-profile-update/trainer-profile-update.component";
import {PasswordUpdateComponent} from "./password-update/password-update.component";
import {TraineeTrainersComponent} from "./trainee-trainers/trainee-trainers.component";
import {AddTrainingComponent} from "./add-training/add-training.component";
import {TraineeTrainingsLogsComponent} from "./trainee-trainings-logs/trainee-trainings-logs.component";
import {TrainerTrainingsLogsComponent} from "./trainer-trainings-logs/trainer-trainings-logs.component";

const routes: Routes = [
  // { path:"", component:InformationComponent},
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  { path: "home", component: InformationComponent},
  { path: "join-us",component: JoinUsComponent},
  { path: "signIn",component: SignInComponent},
  { path: "trainee-signup",component: TraineeRegistrationComponent},
  { path: "trainer-signup",component: TrainerRegistrationComponent},
  { path: "trainee-profile",component: TraineeProfileComponent},
  { path: "trainer-profile",component: TrainerProfileComponent},
  { path: "trainee-update",component: TraineeProfileUpdateComponent},
  { path: "dialog-box",component:DialogBoxComponent},
  { path:"trainer-update",component:TrainerProfileUpdateComponent},
  {path:"update-password",component:PasswordUpdateComponent },
  {path:"edit-trainee-trainer",component:TraineeTrainersComponent},
  {path:"addTraining",component:AddTrainingComponent},
  {path:"trainee-trainings",component:TraineeTrainingsLogsComponent},
  {path:"trainer-trainings",component:TrainerTrainingsLogsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
