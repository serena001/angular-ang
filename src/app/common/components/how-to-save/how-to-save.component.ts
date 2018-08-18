import { Component, OnInit,Input} from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslationLocaleService } from '../../services/translation-locale.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';

declare function unescape(s:string): string;
declare var $:any;
@Component({
  selector: 'app-how-to-save',
  templateUrl: './how-to-save.component.html',
  styleUrls: ['./how-to-save.component.css']
})
export class HowToSaveComponent   implements OnInit {
  @Input('form')
  public myForm:any;
	outputPath:any = 'www.google.com';
	@Language() lang:string;
  constructor(
	  	private _fb:FormBuilder,		
	  	private sanitizer: DomSanitizer,
	  	public locale: LocaleService, 
		public translation:TranslationService){}

  ngOnInit() {			
	  var language = $( "html" ).attr("lang");
	  this.locale.setCurrentLanguage(language);
  }
//Download the form as .hcxs file using Firefox or Chrome
	public downloadFileFirefox()
	{	
		var href:any;
		var preBuffer = JSON.stringify(this.myForm.value);
		var encodedBuffer = window.btoa(unescape(encodeURIComponent(preBuffer)));
		href = "data:application/json;base64," + encodedBuffer;
		var byteStr="";
		var dataURI="";
		dataURI=href;
		if(href!="")
		{
			byteStr = atob(dataURI.split(',')[1]);
			var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
			// write the bytes of the string to an ArrayBuffer
			var arrayBuffer1 = new ArrayBuffer(byteStr.length);
			var arrayUint1 = new Uint8Array(arrayBuffer1);
			for (var i = 0; i < byteStr.length; i++) 
			{
				arrayUint1[i] = byteStr.charCodeAt(i);
			}
			var dataUrl=URL.createObjectURL(new Blob([arrayBuffer1],{type: mimeString}));
			this.outputPath=this.sanitizer.bypassSecurityTrustUrl(dataUrl);		
		}				
	}

	//Download the form as .hcxs file using Internet Explorer
	public downloadFile()
	{
		var href:any;
		var preBuffer = JSON.stringify(this.myForm.value);
		var encodedBuffer = window.btoa(unescape(encodeURIComponent(preBuffer)));
		href = "data:application/json;base64," + encodedBuffer;
		var byteStr="";
		var dataURI="";
		dataURI=href;
			if(href!="")
			{
					byteStr = atob(dataURI.split(',')[1]);
							var arrayBuffer = new ArrayBuffer(byteStr.length);
							var arrayUint = new Uint8Array(arrayBuffer);
							for (var j = 0; j < byteStr.length; j++) {
								arrayUint[j] = byteStr.charCodeAt(j);
							}
						if(arrayUint!=undefined && arrayUint!=null)
						{
								if(window.navigator.msSaveBlob || window.navigator.msSaveOrOpenBlob)
								{
									var arr1=[];
									arr1=[arrayUint];
									var blobObj=new Blob(arr1);
								//	if(isShow){
										window.navigator.msSaveOrOpenBlob(blobObj, "testing.json"); 
								//	}
								//	else
								//	{
										window.navigator.msSaveBlob(blobObj, "testing.json"); 
								//	}
									//used to test saving files and the releasing the blob
									blobObj=null;
									//window.URL.revokeObjectURL();								
								}				 
						}
			}
			arrayBuffer=null;
			arrayUint=null;
	}
}
