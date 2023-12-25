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
import { HomeFilterComponent } from './home-filter/home-filter.component';
import { HomeDefColDefinitionComponent } from './home-def-col-definition/home-def-col-definition.component';
import { HomeGridOptionPaginationComponent } from './home-grid-option-pagination/home-grid-option-pagination.component';
import { HomeGridOptionCellFormatComponent } from './home-grid-option-cell-format/home-grid-option-cell-format.component';
import { CompanyLogoRenderer } from './company-logo-renderer/company-logo-renderer.component';
import { HomeGridOptionCellRendererComponent } from './home-grid-option-cell-renderer/home-grid-option-cell-renderer.component';
import { HomeGridEventsComponent } from './home-grid-events/home-grid-events.component';
import { MissionResultRenderer } from './mission-result-renderer/mission-result-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeStaticComponent,
    HomeFilterComponent,
    HomeDefColDefinitionComponent,
    HomeGridOptionPaginationComponent,
    HomeGridOptionCellFormatComponent,
    CompanyLogoRenderer,
    HomeGridOptionCellRendererComponent,
    HomeGridEventsComponent,
    MissionResultRenderer
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
