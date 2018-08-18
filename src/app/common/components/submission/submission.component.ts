import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { SubmissionService } from '../../services/submission.service';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {
  constructor(private submissionService: SubmissionService) { }
    @Input('group')
  public submissionFormGrp:FormGroup;
lstFoodTypes;
lstFdSubTypesAdditive;
lstFdSubTypesFormula;
lstFdSubTypesNovelFd;


showFdSubTypesAdditive=true;
showFdSubTypesFormula=true;
showFdSubTypesNovelFd=true;
showNoValue=false;
  ngOnInit() {
    this.submissionService.getLstFoodTypes().then(lstFoodTypes => this.lstFoodTypes = lstFoodTypes);
this.submissionService.getLstFdSubTypesAdditive().then(lstFdSubTypesAdditive => this.lstFdSubTypesAdditive = lstFdSubTypesAdditive);
this.submissionService.getLstFdSubTypesFormula().then(lstFdSubTypesFormula => this.lstFdSubTypesFormula = lstFdSubTypesFormula);
this.submissionService.getLstFdSubTypesNovelFd().then(lstFdSubTypesNovelFd => this.lstFdSubTypesNovelFd = lstFdSubTypesNovelFd);

  }
onChange(newVal) 
  {

  }   
  setFoodType($event,value)
	{	

			if(value=="527061")
			{
				this.showFdSubTypesAdditive=false;
        this.showFdSubTypesFormula=true;
        this.showFdSubTypesNovelFd=true;
        this.showNoValue=true;       
			}
			else if(value=="531125" )
			{
				this.showFdSubTypesAdditive=true;
        this.showFdSubTypesFormula=false;
        this.showFdSubTypesNovelFd=true;
        this.showNoValue=true; 
			}
			else if(value=="531124")
			{
				this.showFdSubTypesAdditive=true;
        this.showFdSubTypesFormula=true;
        this.showFdSubTypesNovelFd=false;
        this.showNoValue=true;
			}
			else
			{
				this.showFdSubTypesAdditive=true;
        this.showFdSubTypesFormula=true;
        this.showFdSubTypesNovelFd=false;
        this.showNoValue=true;
			}			
	}
}
