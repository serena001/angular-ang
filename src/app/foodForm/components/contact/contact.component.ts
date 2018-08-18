import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { SubmitterService } from '../../../common/services/submitter.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input('group')
  public contactFrmGrp:FormGroup;
	@Input('index')
  public index:string;	
  @Input('formName')
  public formName:string;	
  lkpReltnshpAffctdPrsnIds;
  lkpContactContextIds;
  @Input('sectionName')
  public sectionName:string;
 
  constructor(private _fb:FormBuilder, private submitterService: SubmitterService) {}  

  ngOnInit() {
      this.submitterService.getLkpReltnshpAffctdPrsnIds().then(lkpReltnshpAffctdPrsnIds => this.lkpReltnshpAffctdPrsnIds = lkpReltnshpAffctdPrsnIds);
      this.submitterService.getLkpContactContextIds().then(lkpContactContextIds => this.lkpContactContextIds = lkpContactContextIds);
  }
}
