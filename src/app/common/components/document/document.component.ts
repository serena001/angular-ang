import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { DocumentService } from '../../services/document.service';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslationLocaleService } from '../../services/translation-locale.service';
import {Localization,LocaleService,TranslationService,Language} from 'angular-l10n';
declare function unescape(s:string): string;
declare var $:any;

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
@Input('group')
public documentFrmGrp:FormGroup;
@Input('index')
public index:string;
outputPath:any="";
fileDatUrl:any;
fileName:string;
lkpInfoResourceTypeIds;
@Language() lang:string;
  constructor(
	  private documentService: DocumentService,
	  private _fb: FormBuilder,
	  private sanitizer: DomSanitizer,
	  public locale: LocaleService, 
    	public translation:TranslationService){}
	
  ngOnInit() {

	var language = $( "html" ).attr("lang");
	this.locale.setCurrentLanguage(language);
		this.fileName= this.documentFrmGrp.get('fileName').value;

		this.documentService.getLkpInfoResourceTypeIds().then(lkpInfoResourceTypeIds => this.lkpInfoResourceTypeIds = lkpInfoResourceTypeIds);

  }
	
   public downloadFileFirefox()
  {	
		var href:any;
			this.fileDatUrl=this.documentFrmGrp.get('fileDataUrl').value;
		this.fileName= this.documentFrmGrp.get('fileName').value;

		this.outputPath=encodeURIComponent(this.fileName);
		//Note: No need to encode because the fileDataUrl is already encoded in base64
		href=this.fileDatUrl;
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
}

