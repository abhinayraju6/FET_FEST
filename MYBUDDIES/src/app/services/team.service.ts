import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app.config';
import { User } from '../models/user.model';

@Injectable()
export class TeamService {
    constructor(private http: HttpClient) { }

    getAllByEmail(emailID: string) {
        return this.http.get<User[]>(appConfig.apiUrl + '/team/' + emailID);
    }
}