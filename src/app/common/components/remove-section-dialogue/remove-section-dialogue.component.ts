import { Component, OnInit } from '@angular/core';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-remove-section-dialogue',
  templateUrl: './remove-section-dialogue.component.html',
  styleUrls: ['./remove-section-dialogue.component.css']
})
export class RemoveSectionDialogueComponent implements OnInit {
  @Language() lang:string;
  constructor(public locale: LocaleService) { }

  ngOnInit() {
    var language = $( "html" ).attr("lang");
	this.locale.setCurrentLanguage(language);
  }

}
