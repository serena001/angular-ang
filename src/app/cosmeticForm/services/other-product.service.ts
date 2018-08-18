import { Component,ElementRef, ViewChild, Renderer, OnInit} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class OtherProductService {

  constructor(private _fb: FormBuilder) { }

  ngInitDefaultValue=this._fb.group({ 
	name:['']
  });
}
