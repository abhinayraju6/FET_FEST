import { Injectable } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { User } from '../models/user.model';


@Injectable()
export class LocalStorageService {
    setuser(user:User) {
        localStorage.setItem('currentUserData',"124562255");//user.toString()
        localStorage.setItem('currentTeam',"5d03acccbb934755c46ac985");
    }
}