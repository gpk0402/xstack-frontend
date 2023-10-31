export class TrainerDetailsDto{
   userName:string|undefined;
  firstName:string|undefined;
  lastName:string|undefined;
  specialization:string|undefined;

  constructor(userName: string | undefined, firstName: string | undefined, lastName: string | undefined, specialization: string | undefined) {
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.specialization = specialization;
  }
}
