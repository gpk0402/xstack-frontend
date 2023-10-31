import {TrainerDetailsDto} from "./TrainerDetailsDto";

export class TraineeProfileDto {
  userName:string|undefined;
  firstName:string|undefined;
  lastName:string|undefined;
  dateOfBirth:string="";
  address:string|undefined;
  email:string|undefined;
  status:boolean=false;
  trainersList: TrainerDetailsDto[] | undefined;

}
