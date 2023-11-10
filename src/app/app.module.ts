import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {EtudiantService} from "./services/etudiant.service";
import {EtudiantComponent} from './etudiant/etudiant.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule
  ],
  providers: [
    EtudiantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
