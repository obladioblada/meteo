import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {MeteoService} from './meteo.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [MeteoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
