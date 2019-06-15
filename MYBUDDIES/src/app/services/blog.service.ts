import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app.config';
import { Blog } from '../models/blogs.model';

@Injectable()
export class BlogService {
    constructor(private http: HttpClient) { }

    getAllByTeam(teamID: string) {
        return this.http.get<Blog[]>(appConfig.apiUrl + '/blog/' + teamID);
    }

    createForTeam(blog: Blog) {
        return this.http.post(appConfig.apiUrl + '/blog/create', blog);
    }
}