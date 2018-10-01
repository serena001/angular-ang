import { Component, OnInit,Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { AdminService } from '../../../common/services/admin.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
@Component({
  selector: 'app-admin-industry',
  templateUrl: './admin-industry.component.html',
  styleUrls: ['./admin-industry.component.css']
})
export class AdminIndustryComponent implements OnInit {
@Input('group')
public adminFrmGrp:FormGroup;
lstHowAwares;
@Language() lang:string;
  constructor(private adminService:AdminService) { }

  ngOnInit() {
  this.adminService.getLstHowAwaresIndustry().then(lstHowAwares => this.lstHowAwares = lstHowAwares);
 
  }

 
}
