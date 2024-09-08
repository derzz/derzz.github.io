import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

    private language: string = 'en';


  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.language);
    this.translate.use(this.language);
  }

  setLanguage(language: string) {
    this.language = language;
    this.translate.use(language);
  }
}
