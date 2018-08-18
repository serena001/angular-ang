import { Component, OnInit,Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
@Input('group')
public adminFrmGrp:FormGroup;
  constructor(private adminService:AdminService) { }
 lstHowAwares;
 lstIncidentReportedTo;
//lstHowAwares=this.adminService.lstHowAwares;
//lstIncidentReportedTo=this.adminService.lstIncidentReportedTo;
  ngOnInit() {

  this.adminService.getLstHowAwares().then(lstHowAwares => this.lstHowAwares = lstHowAwares);
  this.adminService.getLstIncidentReportedTo().then(lstIncidentReportedTo => this.lstIncidentReportedTo = lstIncidentReportedTo);

  }

}
