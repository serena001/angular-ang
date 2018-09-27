import { Component, OnInit ,Input,Injectable} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Injectable()
export class RemoveSectionService {
  @Language() lang:string;
  constructor() { }
  removeSection(message:string)
  {     console.log("sdfsdf");
          $(".messageTitle").html("Warning");
          $(".messageBody").html(message);
          $("#messageDialogue").trigger("open.wb-lbx", [ [ { src: "#messageDialogue", type: "inline" } ] ,true]);      
  };
}
