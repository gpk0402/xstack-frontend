import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Trainee} from "../app/model/Trainee";
import {Observable} from "rxjs";
import {TraineeUpdateDto} from "../app/model/TraineeUpdateDto";
import {TraineeProfileDto} from "../app/model/TraineeProfileDto";
import {TraineeTrainersListUpdate} from "../app/model/TraineeTrainersListUpdate";
import {TraineeTrainingsRequestList} from "../app/model/TraineeTrainingsRequestList";

@Injectable({
  providedIn: 'root'
})
export class TraineeService {
  private baseUrl = "http://localhost:8081/gym/trainee";

  constructor(private httpclient: HttpClient) {
  }

  saveTrainee(trainee: Trainee): Observable<any> {
    return this.httpclient.post<any>(`${this.baseUrl}/registration`, trainee);
  }

  getTraineeProfile(username: string | undefined): Observable<any> {
    return this.httpclient.get<any>(`${this.baseUrl}?username=${username}`);
  }

  updateTraineeProfile(traineeProfileUpdate: TraineeUpdateDto): Observable<any> {
    return this.httpclient.put<any>(`${this.baseUrl}`, traineeProfileUpdate);
  }

  getFreeTrainers(username: string | undefined): Observable<any> {
    return this.httpclient.get<any>(`${this.baseUrl}/notAssignedtrainers?username=${username}`);
  }

  updateTrainersList(traineeTrainerList: TraineeTrainersListUpdate): Observable<any> {
    return this.httpclient.put(`${this.baseUrl}/trainers`, traineeTrainerList);
  }

  getTraineeTrainings(trainings: TraineeTrainingsRequestList): Observable<any> {
    return this.httpclient.post<any>(`${this.baseUrl}/trainings`, trainings);
  }
}
