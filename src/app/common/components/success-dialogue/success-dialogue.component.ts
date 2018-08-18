import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-success-dialogue',
  templateUrl: './success-dialogue.component.html',
  styleUrls: ['./success-dialogue.component.css']
})
export class SuccessDialogueComponent implements OnInit {
@Input('successMessage')
public successMessage:string;
  constructor() { }

  ngOnInit() {
  }

}
