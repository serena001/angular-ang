import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { IngredientService } from '../services/ingredient.service';

@Injectable()
export class IngredientsService {

  constructor(private _fb:FormBuilder,private ingredientService: IngredientService) { }
ngInitDefaultValue=this._fb.group({
					ingredient:this._fb.array([
						this.ingredientService.ngInitDefaultValue						
						])
         });
}
