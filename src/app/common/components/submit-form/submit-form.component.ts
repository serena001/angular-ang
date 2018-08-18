import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { SubmitFormService } from '../../services/submit-form.service';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {
@Input('group')
public submitFormfrmGrp:FormGroup
  lstSubmitOption;
  constructor(private submitFormService: SubmitFormService ) { }

   showOption1:boolean=true;
  showOption2:boolean=true;

  ngOnInit() {
      this.submitFormService.getLstSubmitOption().then(lstSubmitOption => this.lstSubmitOption = lstSubmitOption);
  }
setOption($event,value)
	{	

			if(value=="0")
			{
				this.showOption1=true;
			  this.showOption2=false;
			}
			else if(value=="2" )
			{
					this.showOption1=false;
			  this.showOption2=true;
			}
      else
      {
	      this.showOption1=true;
			  this.showOption2=true;
      }
				
	}
}
