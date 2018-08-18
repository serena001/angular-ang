import { Component, OnInit,Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ReportService } from '../../../common/services/report.service';

@Component({
  selector: 'app-report-transport',
  templateUrl: './report-transport.component.html',
  styleUrls: ['./report-transport.component.css']
})
export class ReportTransportComponent implements OnInit {
@Input('group')
public reportFormGrp:FormGroup;
lstPrograms;
constructor(private _fb:FormBuilder, private reportService:ReportService) { }

  ngOnInit() {
             this.reportService.getLstPrograms().then(lstPrograms => this.lstPrograms = lstPrograms); 
  }

}
