import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import {L10nConfig, L10nLoader,TranslationModule,StorageStrategy, ProviderType} from 'angular-l10n';

const l10nConfig:L10nConfig={
  locale:{
    languages:[
      {code:'en', dir:'ltr'},
      {code:'fr', dir:'ltr'}
    ],
    language:'en',
    storage:StorageStrategy.Cookie
  },
  translation:{
    providers: [
      

      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-app-'},
      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-admin-'},
      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-affected-person-'},
      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-affected-persons-'},
      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-business-contact-'},
      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-common-'},
      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-consumer-'},
      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-contact-common-'},
      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-claim-of-confidentiality-'},
      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-document-'},
      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-documents-'},
      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-how-to-import-'},
      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-how-to-save-'},
      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-incident-'},
      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-measure-'},
      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-person-contact-'},
      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-privacy-notice-'},
      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-product-common-'},
      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-product-label-'},
      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-product-'},
      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-report-'},
      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-submit-'},
      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-submitter-'},
      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-upload-attach-'},
      {type:ProviderType.Static, prefix:'./assets/translationLocale/locale-where-got-prdct-'}


    ],
    caching:true,
  } 
}


import { AppComponent } from './app.component';
import { ContactComponent } from './foodForm/components/contact/contact.component';
import { SubmitterComponent } from './common/components/submitter/submitter.component';
import { ContactService} from './common/services/contact.service';
import { SubmitterService} from './common/services/submitter.service';
import { ReportService} from './common/services/report.service';
import { IncidentService} from './common/services/incident.service';
import { FormService } from './common/services/form.service';
import { ProductService } from './common/services/product.service';
import { MeasureService } from './common/services/measure.service';
import { AdminService } from './common/services/admin.service';
import { WhereGotPrdctService } from './common/services/where-got-prdct.service';
import { AffectedPersonService} from './common/services/affected-person.service';
import { SubmitFormService } from './common/services/submit-form.service';
import { ContactCommonService } from './common/services/contact-common.service';
import { PrivacyNoticeService } from './common/services/privacy-notice.service';
import { SubmissionService } from './common/services/submission.service';
import { DocumentService } from './common/services/document.service';
import { ProductLabelService } from './common/services/product-label.service';
import { DocumentsService } from './common/services/documents.service';
import { ImportInformationService } from './common/services/import-information.service';
import { ClaimOfConfidentialityService} from './common/services/claim-of-confidentiality.service';
import { ContactsService } from './common/services/contacts.service';
import { ProceedToSubmitFormService } from './common/services/proceed-to-submit-form.service';
import { RemoveSectionService } from './common/services/remove-section.service';
import { TranslationLocaleService } from './common/services/translation-locale.service';
import { ConsumerFormService } from './consumerForm/services/consumer-form.service';
import { IndustryFormService } from './industryForm/services/industry-form.service';
import { CosmeticFormService } from './cosmeticForm/services/cosmetic-form.service';
import { FoodFormService } from './foodForm/services/food-form.service';
import { TransportFormService } from './transportForm/services/transport-form.service';
import { DeviceService } from './voluntaryForm/services/device.service';
import { VoluntaryFormService } from './voluntaryForm/services/voluntary-form.service';
import { IncidentVoluntaryService } from './voluntaryForm/services/incident-voluntary.service';
import { RetrieveDrpDownRestServiceService } from './common/services/retrieve-drp-down-rest-service.service';
import { RestServiceEndpointsService } from './common/services/rest-service-endpoints.service';
import { OtherProductService } from './cosmeticForm/services/other-product.service';
import { OtherProductsService } from './cosmeticForm/services/other-products.service';
import { IngredientsService } from './common/services/ingredients.service';
import { IngredientService } from './common/services/ingredient.service';
import { CosmeticProductService } from './cosmeticForm/services/cosmetic-product.service';


import { ReportComponent } from './common/components/report/report.component';
import { IncidentComponent } from './common/components/incident/incident.component';
import { AffectedPersonComponent } from './common/components/affected-person/affected-person.component';
import { ProductComponent } from './common/components/product/product.component';
import {DocumentComponent} from './common/components/document/document.component';
import { MeasureComponent } from './industryForm/components/measure/measure.component';
import { AdminComponent } from './common/components/admin/admin.component';
import { WhereGotPrdctComponent } from './common/components/where-got-prdct/where-got-prdct.component';
import { SubmitFormComponent } from './common/components/submit-form/submit-form.component';
import { PrivacyNoticeComponent } from './common/components/privacy-notice/privacy-notice.component';
import { ContactCommonComponent } from './common/components/contact-common/contact-common.component';
import { ProductLabelComponent } from './common/components/product-label/product-label.component';
import { SubmissionComponent } from './common/components/submission/submission.component';
import { HowToSaveComponent } from './common/components/how-to-save/how-to-save.component';
import { HowToImportComponent } from './common/components/how-to-import/how-to-import.component';
import { UploadAttachComponent } from './common/components/upload-attach/upload-attach.component';
import { MessageDialogueComponent } from './common/components/message-dialogue/message-dialogue.component';
import { DocumentsComponent } from './common/components/documents/documents.component';
import { AffectedPersonsComponent } from './common/components/affected-persons/affected-persons.component';
import { SetCountryProvinceDirective } from './common/directives/set-country-province.directive';
import { SelectCountryProvinceDirective } from './common/directives/select-country-province.directive';
import { IndustryFormComponent } from './industryForm/industry-form/industry-form.component';
import { ConsumerFormComponent } from './consumerForm/consumer-form/consumer-form.component';
import { WhereGotPrdctIndustryComponent } from './industryForm/components/where-got-prdct-industry/where-got-prdct-industry.component';
import { SubmitterIndustryComponent } from './industryForm/components/submitter-industry/submitter-industry.component';
import { ClaimOfConfidentialityComponent } from './common/components/claim-of-confidentiality/claim-of-confidentiality.component';
import { ReportIndustryComponent } from './industryForm/components/report-industry/report-industry.component';
import { AdminIndustryComponent } from './industryForm/components/admin-industry/admin-industry.component';
import { TransportFormComponent } from './transportForm/transport-form/transport-form.component';
import { ReportTransportComponent } from './transportForm/components/report-transport/report-transport.component';
import { SubmitterTransportComponent } from './transportForm/components/submitter-transport/submitter-transport.component';
import { CosmeticFormComponent } from './cosmeticForm/cosmetic-form/cosmetic-form.component';
import { FoodFormComponent } from './foodForm/food-form/food-form.component';
import { SubmitterFoodComponent } from './foodForm/components/submitter-food/submitter-food.component';
import { ProductCommonComponent } from './common/components/product-common/product-common.component';
import { BusinessContactComponent } from './common/components/business-contact/business-contact.component';
import { PersonContactComponent } from './common/components/person-contact/person-contact.component';
import { ContactsComponent } from './foodForm/components/contacts/contacts.component';
import { ProductFoodComponent } from './foodForm/components/product-food/product-food.component';
import { ReportFoodComponent } from './foodForm/components/report-food/report-food.component';
import { ReportCosmeticComponent } from './cosmeticForm/components/report-cosmetic/report-cosmetic.component';
import { ProductCosmeticComponent } from './cosmeticForm/components/product-cosmetic/product-cosmetic.component';
import { OtherProductComponent } from './cosmeticForm/components/other-product/other-product.component';
import { OtherProductsComponent } from './cosmeticForm/components/other-products/other-products.component';
import { SubmitterCosmeticComponent } from './cosmeticForm/components/submitter-cosmetic/submitter-cosmetic.component';
import { ContactCosmeticicComponent } from './cosmeticForm/components/contact-cosmeticic/contact-cosmeticic.component';
import { ContactsCosmeticComponent } from './cosmeticForm/components/contacts-cosmetic/contacts-cosmetic.component';
import { IngredientComponent } from './cosmeticForm/components/ingredient/ingredient.component';
import { IngredientsComponent } from './cosmeticForm/components/ingredients/ingredients.component';
import { SuccessDialogueComponent } from './common/components/success-dialogue/success-dialogue.component';
import { ErrorDialogueComponent } from './common/components/error-dialogue/error-dialogue.component';
import { RemoveSectionDialogueComponent } from './common/components/remove-section-dialogue/remove-section-dialogue.component';
import { VoluntaryFormComponent } from './voluntaryForm/voluntary-form/voluntary-form.component';
import { ProductVoluntaryComponent } from './voluntaryForm/components/product-voluntary/product-voluntary.component';
import { ProductsVoluntaryComponent } from './voluntaryForm/components/products-voluntary/products-voluntary.component';
import { ManufacturerVoluntaryComponent } from './voluntaryForm/components/manufacturer-voluntary/manufacturer-voluntary.component';
import { RetailerVoluntaryComponent } from './voluntaryForm/components/retailer-voluntary/retailer-voluntary.component';
import { ReportVoluntaryComponent } from './voluntaryForm/components/report-voluntary/report-voluntary.component';
import { IncidentVoluntaryComponent } from './voluntaryForm/components/incident-voluntary/incident-voluntary.component';

const appRoutes: Routes = [ 
  { path: 'consumerEn', component: ConsumerFormComponent },
  { path: 'consumerFr', component: ConsumerFormComponent },
  { path: 'industryEn', component: IndustryFormComponent },
  { path: 'industryFr', component: IndustryFormComponent },
  { path: 'transportEn', component: TransportFormComponent },
  { path: 'transportFr', component: TransportFormComponent },
  { path: 'foodEn', component: FoodFormComponent },
  { path: 'foodFr', component: FoodFormComponent },
  { path: 'cosmeticEn', component:CosmeticFormComponent },
  { path: 'cosmeticFr', component:CosmeticFormComponent },
  { path: 'voluntaryEn', component:VoluntaryFormComponent },
  { path: 'voluntaryFr', component:VoluntaryFormComponent },
 
 
 
];


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    SubmitterComponent,
    ReportComponent, 
    IncidentComponent, 
    AffectedPersonComponent, 
    ProductComponent,
    DocumentComponent,
    MeasureComponent,
    AdminComponent,
    WhereGotPrdctComponent,
    DocumentComponent,
    SubmitFormComponent,
    PrivacyNoticeComponent,
    ContactCommonComponent,
    ProductLabelComponent,
    SubmissionComponent,
    HowToSaveComponent,
    HowToImportComponent,
    UploadAttachComponent,
    MessageDialogueComponent,
    DocumentsComponent,
    AffectedPersonsComponent,
    SetCountryProvinceDirective,
    SelectCountryProvinceDirective,
    IndustryFormComponent,
    ConsumerFormComponent,
    WhereGotPrdctIndustryComponent,
    SubmitterIndustryComponent,
    ClaimOfConfidentialityComponent,
    ReportIndustryComponent,
    AdminIndustryComponent,
    TransportFormComponent,
    ReportTransportComponent,
    SubmitterTransportComponent,
    CosmeticFormComponent,
    FoodFormComponent,
    SubmitterFoodComponent,
    ProductCommonComponent,
    BusinessContactComponent,
    PersonContactComponent,
    ContactsComponent,
    ProductFoodComponent,
    ReportFoodComponent,
    CosmeticFormComponent,
    ReportCosmeticComponent,
    ProductCosmeticComponent,
    OtherProductComponent,
    OtherProductsComponent,
    SubmitterCosmeticComponent,
    ContactCosmeticicComponent,
    ContactsCosmeticComponent,
    IngredientComponent,
    IngredientsComponent,
    SuccessDialogueComponent,
    ErrorDialogueComponent,
    RemoveSectionDialogueComponent,
    VoluntaryFormComponent,
    ProductVoluntaryComponent,
    ProductsVoluntaryComponent,
    ManufacturerVoluntaryComponent,
    RetailerVoluntaryComponent,
    ReportVoluntaryComponent,
    IncidentVoluntaryComponent,
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{useHash:true}),
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslationModule.forRoot(l10nConfig)
  ],
  providers: [
    ContactService,
    SubmitterService,
    FormService,
    ReportService,
    IncidentService,  
    ProductService,
    MeasureService,
    AdminService,
    WhereGotPrdctService,
    AffectedPersonService,
    SubmitFormService,
    ContactCommonService,
    PrivacyNoticeService,
    SubmissionService,
    DocumentService,
    ProductLabelService,
    DocumentsService,
    ImportInformationService,
    ClaimOfConfidentialityService,
    ContactsService,
    ProceedToSubmitFormService,
    RemoveSectionService,
    TranslationLocaleService,
    ConsumerFormService,
    IndustryFormService,
    CosmeticFormService,
    FoodFormService,
    TransportFormService,
    DeviceService,
    VoluntaryFormService,
    IncidentVoluntaryService,
    RetrieveDrpDownRestServiceService,
    RestServiceEndpointsService,
    OtherProductService,
    IngredientsService,
    IngredientService,
    CosmeticProductService,
    OtherProductsService,
    ], 
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public l10nLoader:L10nLoader){
    this.l10nLoader.load();
    //location.hash("!");

  }
 }
