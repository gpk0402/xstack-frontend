import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {


  private selectedLanguage: string = 'en';
  constructor() { }

  set setLanguage(language: string) {
    this.selectedLanguage = language;
  }

  get getLanguage(): string {
    return this.selectedLanguage;
  }
}
