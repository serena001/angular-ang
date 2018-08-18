import { Component, OnInit,Input} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {
@Input('group')
public incidentFrmGrp:FormGroup;

  constructor(private _fb:FormBuilder) { }

  ngOnInit() {}

}
