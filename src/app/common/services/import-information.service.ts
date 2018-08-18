import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Injectable()
export class ImportInformationService {

  constructor(	private _fb:FormBuilder,) { }
 repeatSections=[{"parent":"documents", "objectPath":"documents.document", "child":"'document'", "defaultValue":"tempVarForThis.documentService.ngInitDefaultValueNoFormGroup"},
								{"parent":"incident","objectPath":"incident.affectedPersons.affectedPerson","child":"'affectedPersons.affectedPerson'","defaultValue":"tempVarForThis.affectedPersonService.ngInitDefaultValueNoFormGroup"}];
    
 public importInformation(this,jsonDoc,myForm,repeatSections)
 {console.log("import");    
						for (var name in jsonDoc) 
						{
							if(jsonDoc.hasOwnProperty(name)) {
								const control = this.myForm.controls[name];	 
								console.log("import" + JSON.stringify(this.myForm.controls[name]));    
								var found=0;
								var parent="";
								var child="";
								var objectPath="";
								var defaultValue="";
								for(var j=0;j<repeatSections.length;j++)
								{
									if(repeatSections[j].parent==name)
									{
										parent=repeatSections[j].parent;
								 		child=repeatSections[j].child;
								 		objectPath=repeatSections[j].objectPath;
								 		defaultValue=repeatSections[j].defaultValue;
										found=1;
										break;
									}
								}
								if(found==1)
								{
									var controls:FormArray;											
									var controls=<FormArray>control.get(eval(child));
									var i:number=controls.length;
									while(i>=0)
									{
										controls.removeAt(i);
										i--;
									}	
									length=this.proceedToSubmitFormService.findLengthOfJsonArray(objectPath,jsonDoc);
									for(var i=0; i<length;i++)
									{
										controls.push(this._fb.group(eval(defaultValue)));
									}
								}				
									console.log("import JSON" + JSON.stringify(jsonDoc[name])); 					   
								control.patchValue(jsonDoc[name]);
							}
						}
}
}
