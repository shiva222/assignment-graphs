import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiHttpService } from "../app/core/services/ApiHttpService";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphLayoutComponent } from './graph-layout/graph-layout.component';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule, HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    GraphLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule
  ],
  providers: [ApiHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
