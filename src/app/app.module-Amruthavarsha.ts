import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CinemasComponent } from './cinemas/cinemas.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component-Amruthavarsha';
import { AppRoutingModule } from './app-routing.module-Amruthavarsha';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CinemasComponent
  ],
   
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
