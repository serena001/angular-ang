import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { WhereGotPrdctService } from '../../../common/services/where-got-prdct.service';
import { SubmitterService } from '../../../common/services/submitter.service';

@Component({
  selector: 'app-where-got-prdct-industry',
  templateUrl: './where-got-prdct-industry.component.html',
  styleUrls: ['./where-got-prdct-industry.component.css']
})
export class WhereGotPrdctIndustryComponent implements OnInit {
@Input('group')
public whereGotPrdctFormGrp:FormGroup;
@Input('index')
public index:string;
@Input('formName')
public formName:string;
@Input('sectionName')
public sectionName:string;

  constructor(private whereGotPrdctService: WhereGotPrdctService,private submitterService:SubmitterService) { }
 lstProductFromWhom;
  ngOnInit() {
         this.whereGotPrdctService.getLstProductFromWhom().then(lstProductFromWhom => this.lstProductFromWhom = lstProductFromWhom); 
  }

}
