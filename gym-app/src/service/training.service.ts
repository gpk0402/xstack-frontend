import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TrainingDto} from "../app/model/TrainingDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private baseUrl = "http://localhost:8081/gym/training";

  constructor(private httpclient: HttpClient) { }
  saveTraining(trainingDto: TrainingDto): Observable<any> {
    return this.httpclient.post<any>(`${this.baseUrl}`, trainingDto);
  }
}
