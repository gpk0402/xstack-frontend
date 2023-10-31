import {Component} from '@angular/core';
import {LanguageService} from "../../service/language.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  selectedLanguage: string;
  languages = [
    { value: 'en', viewValue: 'English' },
    { value: 'es', viewValue: 'Spanish' },
  ];

  private languageService: LanguageService;

  constructor(languageService: LanguageService) {
    this.languageService = languageService;
    this.selectedLanguage = this.languageService.getLanguage;
  }

  onLanguageChange() {
    this.languageService.setLanguage = this.selectedLanguage;
  }
}
