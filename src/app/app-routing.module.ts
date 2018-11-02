import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApplicantFormComponent} from './applicant-form/applicant-form.component';
import {StatusComponent} from './status/status.component';
import {AlternativepositionComponent} from './alternativeposition/alternativeposition.component';
import {PositionComponent} from './position/position.component';
import { AffiliationComponent } from './affiliation/affiliation.component';
import { TeamComponent } from './team/team.component';
import { MenuComponent} from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { SearchapplicantComponent } from './searchapplicant/searchapplicant.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component:ApplicantFormComponent},
  {path: 'status', component: StatusComponent},
  {path: 'applicantform',component:ApplicantFormComponent},
  {path: 'affiliation',component:AffiliationComponent},
  {path: 'alternativeposition',component:AlternativepositionComponent},
  {path: 'position',component:PositionComponent},
  {path: 'team',component:TeamComponent},
  {path: 'menu',component:MenuComponent},
  {path: 'searchapplicant',component:SearchapplicantComponent}
]
@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})

export class AppRoutingModule { }