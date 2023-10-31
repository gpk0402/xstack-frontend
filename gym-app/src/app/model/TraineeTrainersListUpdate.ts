export class TraineeTrainersListUpdate{
  constructor(userName: string | undefined, trainers: string[]) {
    this.traineeUsername=userName;
    this.trainersUsernames=trainers;

  }

  traineeUsername:string|undefined;
  trainersUsernames:string[]|undefined;
}
