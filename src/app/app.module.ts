import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {routing} from "./app-routing.module";
import { InternshipsComponent } from './internships/internships.component';
import { InternshipFormComponent } from './internship-form/internship-form.component';
import { InternshipListComponent } from './internship-list/internship-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    InternshipsComponent,
    InternshipFormComponent,
    InternshipListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
