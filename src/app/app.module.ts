import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EncountersComponent } from './components/encounters/encounters.component';
import { PatientStatusComponent } from './components/patient-status/patient-status.component';


@NgModule({
  declarations: [
    AppComponent,
    EncountersComponent,
    PatientStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
