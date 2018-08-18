import { Component, OnInit,Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ReportService } from '../../../common/services/report.service';

@Component({
  selector: 'app-report-food',
  templateUrl: './report-food.component.html',
  styleUrls: ['./report-food.component.css']
})
export class ReportFoodComponent implements OnInit {
@Input('group')
public reportFoodFrmGrp:FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
