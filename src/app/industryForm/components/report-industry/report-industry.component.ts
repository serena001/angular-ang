import { Component, OnInit,Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ReportService } from '../../../common/services/report.service';

@Component({
  selector: 'app-report-industry',
  templateUrl: './report-industry.component.html',
  styleUrls: ['./report-industry.component.css']
})
export class ReportIndustryComponent implements OnInit {
@Input('group')
public reportFormGrp:FormGroup;
lkpPurposeIds;
constructor(private _fb:FormBuilder, private reportService:ReportService) { }

  ngOnInit() { 
    this.reportService.getLkpPurposeIds().then(lkpPurposeIds => this.lkpPurposeIds = lkpPurposeIds);    	
  }
}
