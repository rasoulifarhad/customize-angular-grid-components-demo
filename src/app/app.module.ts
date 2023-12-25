import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './common/material.module';
import { HomeComponent } from './home/home.component';
import { HomeStaticComponent } from './home-static/home-static.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeStaticComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
