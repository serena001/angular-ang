import { Component, OnInit,Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { MeasureService } from '../../../common/services/measure.service';
@Component({
  selector: 'app-measure',
  templateUrl: './measure.component.html',
  styleUrls: ['./measure.component.css']
})
export class MeasureComponent implements OnInit {
  @Input('group')
public measureFrmGrp:FormGroup;
  constructor(private measureService:MeasureService) { }
lstCorrectiveMeasure=this.measureService.lstCorrectiveMeasure;

  ngOnInit() {
    	
  }

}
