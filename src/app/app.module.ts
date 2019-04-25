import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MenuComponent} from './menu/menu.component';
import { ApplicantFormComponent } from './applicant-form/applicant-form.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddorremovedataComponent } from './addorremovedata/addorremovedata.component';
import { AppRoutingModule } from './/app-routing.module';
import { StatusComponent } from './status/status.component';
import { AffiliationComponent } from './affiliation/affiliation.component';
import { PositionComponent } from './position/position.component';
import { AlternativepositionComponent } from './alternativeposition/alternativeposition.component';
import { TeamComponent } from './team/team.component';
import { DisplaytableComponent } from './displaytable/displaytable.component';
import { DemoMaterialModule } from './app.materialmodule';
import { DatadialogComponent } from './datadialog/datadialog.component';
import { Dialogcontent} from './datadialog/dialogcontent';
import { ConstantdataService} from './constantdata.service';
import { LoginComponent } from './login/login.component';
import { SearchapplicantComponent } from './searchapplicant/searchapplicant.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LocaldatasericeService }  from './localdataserice.service';
import { Datadialog1Component } from './datadialog1/datadialog1.component';
import { Dialogcontent1} from './datadialog1/dialogcontent1';

@NgModule({
  declarations: [
    AppComponent,
    ApplicantFormComponent,
    SelectBoxComponent,
    InputBoxComponent,
    TextAreaComponent,
    NavbarComponent,
    AddorremovedataComponent,
    StatusComponent,
    AffiliationComponent,
    PositionComponent,
    AlternativepositionComponent,
    TeamComponent,
    DisplaytableComponent,
    DatadialogComponent,
    Dialogcontent,
    Dialogcontent1,
    LoginComponent,
    SearchapplicantComponent,
    MenuComponent,
    Datadialog1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule, 
    DemoMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    LocaldatasericeService, { dataEncapsulation: false }
    )
  ],
  entryComponents: [DatadialogComponent, Dialogcontent, Dialogcontent1,Datadialog1Component],
  providers: [ConstantdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }