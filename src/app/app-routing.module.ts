import {NgModule, ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {InternshipsComponent} from "./internships/internships.component";
import {InternshipFormComponent} from "./internship-form/internship-form.component";
import {InternshipListComponent} from "./internship-list/internship-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'internships',
    component: InternshipsComponent,
    children: [
      {path: '' },
      {path: 'internship-form', component: InternshipFormComponent},
      {path: 'internship-list', component: InternshipListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AngularFinalRoutingModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
