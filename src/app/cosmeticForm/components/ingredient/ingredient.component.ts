import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { IngredientService } from '../../../common/services/ingredient.service';
import { Observable, of } from 'rxjs';
import { map , catchError} from 'rxjs/operators';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
@Input('group')
public ingredientsFrmGrp:FormGroup;
@Input('index')
public index:string;
@Language() lang:string;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
  }


}
