import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Trainee} from "../app/model/Trainee";
import {Observable} from "rxjs";
import {Trainer} from "../app/model/Trainer";
import {TraineeUpdateDto} from "../app/model/TraineeUpdateDto";
import {TrainerUpdateDto} from "../app/model/TrainerUpdateDto";
import {TrainerTrainingsRequestList} from "../app/model/TrainerTrainingsRequestList";

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private baseUrl = "http://localhost:8081/gym/trainer";
  constructor(private httpclient:HttpClient) {
  }

  saveTrainer(trainer:Trainer):Observable<any>{
    return this.httpclient.post(`${this.baseUrl}/registration`,trainer);
  }

  getTrainerProfile(username: string|undefined): Observable<any> {
    return this.httpclient.get<any>(`${this.baseUrl}?username=${username}`);
  }

  updateTraineeProfile(trainerProfileUpdate:TrainerUpdateDto):Observable<any>{
    return this.httpclient.put<any>(`${this.baseUrl}`,trainerProfileUpdate);
  }

  getTrainerTrainings(trainings: TrainerTrainingsRequestList): Observable<any> {
    return this.httpclient.post<any>(`${this.baseUrl}/trainings`, trainings);
  }

}
