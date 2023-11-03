import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedLoginService {

  constructor() { }
  private userDataSubject = new BehaviorSubject<{ username: string, password: string,userType: string } | null>(null);
  userData$ = this.userDataSubject.asObservable();

  setUserData(userData: { username: string, password: string, userType: string }) {
    this.userDataSubject.next(userData);
  }
}
