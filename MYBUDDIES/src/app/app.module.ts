import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatRadioModule, MatSelectModule, MatButtonToggleModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { EventsComponent } from './components/events/events.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeamComponent } from './components/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    CalendarComponent,
    ChatroomComponent,
    EventsComponent,
    DashboardComponent,
    TeamComponent
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
