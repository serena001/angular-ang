import { Component, OnInit,Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ReportService } from '../../../common/services/report.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
@Component({
  selector: 'app-report-cosmetic',
  templateUrl: './report-cosmetic.component.html',
  styleUrls: ['./report-cosmetic.component.css']
})
export class ReportCosmeticComponent implements OnInit {
@Input('group')
public reportCosmeticFormGrp:FormGroup;
@Language() lang:string;
  constructor(private _fb:FormBuilder, private reportService:ReportService) { }
lstNotificationTypes;
  ngOnInit() {
        this.reportService.getLstNotificationTypes().then(lstNotificationTypes => this.lstNotificationTypes = lstNotificationTypes);
 
  }

}
