import { Component, OnInit,Input} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-report-voluntary',
  templateUrl: './report-voluntary.component.html',
  styleUrls: ['./report-voluntary.component.css']
})
export class ReportVoluntaryComponent implements OnInit {
 @Input('group')
  public reportVoluntaryFrmGrp:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
