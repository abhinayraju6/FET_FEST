import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatRadioModule, MatSelectModule, MatButtonToggleModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule, MatRadioModule, MatSelectModule, MatButtonToggleModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, 
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
