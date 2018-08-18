import { Injectable } from '@angular/core';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
@Injectable()
export class TranslationLocaleService {
folderName:string='./assets/translationLocale/locale-';
  constructor(
    public locale: LocaleService, 
		public translation: TranslationService
    ) 
    { 
  /*     super(locale,translation);
		  this.locale.addConfiguration()
        .addLanguages(['en', 'fr'])
        .setCookieExpiration(30)
        .defineLanguage('en');
    	this.locale.init();
    	this.translation.addConfiguration()*/
       /* .addProvider('/dist/assets/translationLocale/locale-report-')
        .addProvider('/dist/assets/translationLocale/locale-consumer-')
        .addProvider('/dist/assets/translationLocale/locale-document-')
        .addProvider('/dist/assets/translationLocale/locale-documents-')
        .addProvider('/dist/assets/translationLocale/locale-how-to-import-')
         .addProvider('/dist/assets/translationLocale/locale-how-to-save-')
          .addProvider('/dist/assets/translationLocale/locale-upload-attach-')
          .addProvider('/dist/assets/translationLocale/locale-index-');*/
     /*      .addProvider('./assets/translationLocale/locale-report-')
        .addProvider('./assets/translationLocale/locale-consumer-')
        .addProvider('./assets/translationLocale/locale-document-')
        .addProvider('./assets/translationLocale/locale-documents-')
        .addProvider('./assets/translationLocale/locale-how-to-import-')
         .addProvider('./assets/translationLocale/locale-how-to-save-')
          .addProvider('./assets/translationLocale/locale-upload-attach-')
          .addProvider('./assets/translationLocale/locale-index-');
    	this.translation.init();
      this.locale.setCurrentLanguage("en");*/
    }
 setCurrentLanguage(language,locale)
    { 
      locale.setCurrentLanguage(language);
    }
  setConfigurationFile(fileName,translation)
  {
   /* var pathName='/dist/assets/translationLocale/';*/
    var pathName='./assets/translationLocale/';
    translation.addConfiguration().AddProvider(pathName+fileName+"-");
  }
  setConfigurationFileAndLanguage(language,locale,fileName,translation)
  {
      this.setCurrentLanguage(language,locale);
 //     this.setConfigurationFile(fileName,translation);
  }
}
