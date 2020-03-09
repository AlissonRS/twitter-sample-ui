import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable()
export class TwitterDataService {

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get<User[]>("./assets/mock-data.json");
    }

}