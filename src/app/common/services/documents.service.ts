import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { DocumentService } from '../services/document.service';

@Injectable()
export class DocumentsService {

  constructor(private _fb:FormBuilder,private documentService: DocumentService) { }
  ngInitDefaultValue=this._fb.group({
					document:this._fb.array([
						this.documentService.ngInitDefaultValue						
						])
         });
}
