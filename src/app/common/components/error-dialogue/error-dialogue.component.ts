import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-error-dialogue',
  templateUrl: './error-dialogue.component.html',
  styleUrls: ['./error-dialogue.component.css']
})
export class ErrorDialogueComponent implements OnInit {
@Input('errorMessage')
public errorMessage:string;
  constructor() { }

  ngOnInit() {
  }

}
