import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Injectable()
export class IngredientService {

  constructor(private _fb:FormBuilder) { }

    ngInitDefaultValue=	this._fb.group({ingredientName:[''],mayContain:[''],lowerlimit:[''],upperlimit:[''],lkpIngredientValidationIdStr:[''],conditionTextE:['']});
ngInitDefaultValueNoFormGroup={ingredientName:[''],mayContain:[''],lowerlimit:[''],upperlimit:[''],lkpIngredientValidationIdStr:[''],conditionTextE:['']};     
}
