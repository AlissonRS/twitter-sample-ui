import { BehaviorSubject, Observable, combineLatest, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { TwitterDataService } from './twitter.data.service';

@Injectable()
export class UserService {

    private currentIndex$ = new BehaviorSubject<number>(0);
    private users$ = new BehaviorSubject<User[]>([]);

    private currentIndex: number = 0;
    private userCount: number;

    constructor(private twitterDataService: TwitterDataService) { }

    public getCurrentUser() : Observable<User> {
        return combineLatest(
            this.currentIndex$,
            this.users$
        ).pipe(
            map(data => ({ currentIndex: data[0], users: data[1] })),
            map(data => data.users[data.currentIndex])
        );
    }

    public getUsers() {
        return this.twitterDataService.getUsers()
        .pipe(
            tap(users => this.userCount = users.length),
            tap(users => this.users$.next(users))
        );
    }

    public switchUser() {
        this.currentIndex++;
        if (this.currentIndex > this.userCount - 1)
            this.currentIndex = 0;
        this.currentIndex$.next(this.currentIndex);
    }

}