import {TrainerDetailsDto} from "./TrainerDetailsDto";
import {TraineeDetailsDto} from "./TraineeDetailsDto";

export class TrainerProfileDto {
  userName:string|undefined;
  firstName:string|undefined;
  lastName:string|undefined;
  specialization:string|undefined;
  email:string|undefined;
  status:boolean|undefined;
  traineesList: TraineeDetailsDto[] | undefined;

}
