import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app.config';
import { Event } from '../models/events.model';

@Injectable()
export class EventService {
    constructor(private http: HttpClient) { }

    getAllByEvents(teamID: string) {
        return this.http.get<Event[]>(appConfig.apiUrl + '/event/' + teamID);
    }

    createForEvent(event: Event) {
        return this.http.post(appConfig.apiUrl + '/event/create', event);
    }
}
