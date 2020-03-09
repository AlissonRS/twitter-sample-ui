import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.subscription = this.userService.getUsers().subscribe(users => {
      console.log("Users loaded");
      console.log(users);
    });
  }

  switchUser() {
    this.userService.switchUser();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
