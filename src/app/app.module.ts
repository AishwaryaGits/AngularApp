import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { ViewAlbumComponent } from './view-album/view-album.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HttpClient, HttpHeaders } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CreateAlbumComponent,
    ViewAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
