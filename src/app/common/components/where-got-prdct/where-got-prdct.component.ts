import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { WhereGotPrdctService } from '../../services/where-got-prdct.service';
import { SubmitterService } from '../../services/submitter.service';
@Component({
  selector: 'app-where-got-prdct',
  templateUrl: './where-got-prdct.component.html',
  styleUrls: ['./where-got-prdct.component.css']
})
export class WhereGotPrdctComponent implements OnInit {
@Input('group')
public whereGotPrdctFormGrp:FormGroup;
lstProductFromWhom;
@Input('sectionName')
public sectionName:string;
@Input('index')
public index:string;
@Input('formName')
public formName:string;
constructor(private whereGotPrdctService: WhereGotPrdctService,private submitterService:SubmitterService) { }
  ngOnInit() {
      this.whereGotPrdctService.getLstProductFromWhom().then(lstProductFromWhom => this.lstProductFromWhom = lstProductFromWhom);
  }

}
