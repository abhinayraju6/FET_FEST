import { Routes } from '@angular/router';

import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {EventsComponent} from "./components/events/events.component";
import {BlogsComponent} from "./components/blogs/blogs.component";
import {ChatroomComponent} from "./components/chatroom/chatroom.component";
import {TeamComponent} from "./components/team/team.component";
import { LoginComponent } from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";

export const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'team', component: TeamComponent },
    { path: 'events', component: EventsComponent },
    { path: 'chatroom', component: ChatroomComponent  },
    { path: 'blogs', component: BlogsComponent },
    { path: 'signin', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    
];
