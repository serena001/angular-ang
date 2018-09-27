import { Component, OnInit } from '@angular/core';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-message-dialogue',
  templateUrl: './message-dialogue.component.html',
  styleUrls: ['./message-dialogue.component.css']
})
export class MessageDialogueComponent implements OnInit {

  constructor(public locale: LocaleService, ) { }

  ngOnInit() {
    var language = $( "html" ).attr("lang");
	this.locale.setCurrentLanguage(language);
  }

}
