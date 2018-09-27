import { Component, OnInit,Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare var $:any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
@Language() lang:string;
@Input('group')
public adminFrmGrp:FormGroup;
  constructor(
    private adminService:AdminService,
    public locale: LocaleService) { }
 lstHowAwares;
 lstIncidentReportedTo;
//lstHowAwares=this.adminService.lstHowAwares;
//lstIncidentReportedTo=this.adminService.lstIncidentReportedTo;
  ngOnInit() {
    var language = $( "html" ).attr("lang");
    this.locale.setCurrentLanguage(language);
  this.adminService.getLstHowAwares().then(lstHowAwares => this.lstHowAwares = lstHowAwares);
  this.adminService.getLstIncidentReportedTo().then(lstIncidentReportedTo => this.lstIncidentReportedTo = lstIncidentReportedTo);

  }

}
