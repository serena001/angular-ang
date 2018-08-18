import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Injectable()
export class ProductService {

  constructor(private _fb: FormBuilder) { }
 ngInitDefaultValue=this._fb.group({			     
          productBrandName:[''],
			     modelNumber:[''],
			     serialNumber: [''],
           dateCode:[''],
			     upc:[''],
			     certification:[''],
           batchNumber:[''],
           productDescription:[''],
          })
    ngInitDefaultValueFood=this._fb.group({			     
          productBrandName:[''],			   
           productDescription:['']
          })      
}
