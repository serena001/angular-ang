import { Component, OnInit,Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ReportService } from '../../../common/services/report.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
@Component({
  selector: 'app-report-food',
  templateUrl: './report-food.component.html',
  styleUrls: ['./report-food.component.css']
})
export class ReportFoodComponent implements OnInit {
@Input('group')
public reportFoodFrmGrp:FormGroup;
@Language() lang:string;
  constructor() { }

  ngOnInit() {
  }

}
