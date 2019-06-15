import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatRadioModule, MatSelectModule, MatButtonToggleModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { FormsModule } from '@angular/forms';


import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { EventsComponent } from "./components/events/events.component";
import { BlogsComponent } from "./components/blogs/blogs.component";
import { ChatroomComponent } from "./components/chatroom/chatroom.component";
import { TeamComponent } from "./components/team/team.component";
import { CalenderComponent } from "./components/calender/calender.component";
import { LoginComponent } from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EventsComponent,
    BlogsComponent,
    ChatroomComponent,
    TeamComponent,
    CalenderComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule, MatRadioModule, MatSelectModule, MatButtonToggleModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, 
    MatCardModule,
    BrowserAnimationsModule,
    CalenderComponent,
    FormsModule,
    appRoutes,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
