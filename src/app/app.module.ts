import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {  routing, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataApiService} from 'src/app/services/data-api.service';
import { HomeComponent } from './home/home.component'
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,routing,AppRoutingModule,
  ],
  // entryComponents: [HomeComponent],

  providers: [DataApiService],  // inyectamos el servicio
  bootstrap: [AppComponent]
})
export class AppModule { }
