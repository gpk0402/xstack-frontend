import { Injectable } from '@angular/core';
import { SignInComponent } from 'src/app/sign-in/sign-in.component';

@Injectable({
  providedIn: 'root'
})
export class SharedSignInService {

  constructor() { }

  private signInComponent: SignInComponent | null = null;

  setSignInComponent(component: SignInComponent) {
    this.signInComponent = component;
  }

  triggerSignIn() {
    if (this.signInComponent) {
      this.signInComponent.onSubmit();
    }
  }
}
