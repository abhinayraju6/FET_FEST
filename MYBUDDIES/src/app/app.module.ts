import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatRadioModule, MatSelectModule, MatButtonToggleModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatCardModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { AppComponent } from './app.component';
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

import { BlogService } from './services/blog.service';
import {TeamService } from './services/team.service';
import {EventService } from './services/events.service';
import{LocalStorageService} from './services/localstorage.service';

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
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatListModule,
    MatSelectModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [
    BlogService,
    TeamService,
    EventService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
