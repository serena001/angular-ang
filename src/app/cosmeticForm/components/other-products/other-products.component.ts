import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
@Component({
  selector: 'app-other-products',
  templateUrl: './other-products.component.html',
  styleUrls: ['./other-products.component.css']
})
export class OtherProductsComponent implements OnInit {
@Input('group')
public otherProductsFrmGrp:FormGroup;
@Language() lang:string;
  constructor(private _fb: FormBuilder) { }
  ngOnInit() {
  }
  addOtherProduct()
	{
		const control = <FormArray>this.otherProductsFrmGrp.get('otherProduct');
	  control.push(this._fb.group({ name:[''] }));
	}
	removeOtherProduct(i:number)
	{
    const control = <FormArray>this.otherProductsFrmGrp.get("otherProduct");
	    control.removeAt(i);
	}
  getOtherProducts(otherProductsFrmGrp)
  {
    return otherProductsFrmGrp.controls.otherProduct.controls;
  }
}
