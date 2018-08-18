import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { SubmitterService } from '../../services/submitter.service';
@Component({
  selector: 'app-submitter',
  templateUrl: './submitter.component.html',
  styleUrls: ['./submitter.component.css']
})
export class SubmitterComponent implements OnInit {
  @Input('group')
  public submitterFrmGrp:FormGroup;
  @Input('index')
  public index:string;
  @Input('formName')
  public formName:string;
  lkpReltnshpAffctdPrsnIds;
  lkpContactContextIds;
  @Input('sectionName')
  public sectionName:string;
  constructor(private _fb:FormBuilder, private submitterService: SubmitterService) {} 
  ngOnInit() 
  {      
    this.submitterService.getLkpReltnshpAffctdPrsnIds().then(lkpReltnshpAffctdPrsnIds => this.lkpReltnshpAffctdPrsnIds = lkpReltnshpAffctdPrsnIds);
    this.submitterService.getLkpContactContextIds().then(lkpContactContextIds => this.lkpContactContextIds = lkpContactContextIds);
 }
}
