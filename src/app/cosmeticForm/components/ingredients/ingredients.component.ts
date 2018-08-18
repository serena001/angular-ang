import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { IngredientService } from '../../../common/services/ingredient.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
@Input('group')
public ingredientsFrmGrp:FormGroup;
@Input('formName')
public formName:string;

  constructor(private _fb: FormBuilder,private ingredientService:IngredientService) { }
  ngOnInit() {
  }
  addIngredient()
	{
		const control = <FormArray>this.ingredientsFrmGrp.get('ingredient');
	  control.push(this.ingredientService.ngInitDefaultValue);
	}
	removeIngredient(i:number)
	{
    const control = <FormArray>this.ingredientsFrmGrp.get("ingredient");
	    control.removeAt(i);
	}
  getIngredients(ingredientsFrmGrp)
  {
    return ingredientsFrmGrp.controls.ingredient.controls;
  }
}
