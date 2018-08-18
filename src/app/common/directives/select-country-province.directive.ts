import { Directive,Input } from '@angular/core';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
@Directive({
  selector: '[appSelectCountryProvince]'
})
export class SelectCountryProvinceDirective {
//@Input('appSelectCountryProvince') 
//public appSelectCountryProvince:string;

  constructor(public locale: LocaleService,public translation: TranslationService) 
    { 
      	//this.super(locale,translation);
		/*  this.locale.addConfiguration()
        .addLanguages(['en', 'fr'])
        .setCookieExpiration(30)
        .defineLanguage('en');
    	this.locale.init(); 

    	this.translation.addConfiguration()
        .addProvider('./assets/locale-');
    	this.translation.init();
      this.locale.setCurrentLanguage("en");*/
    }

}
