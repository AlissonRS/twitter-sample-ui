import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trend-list',
  templateUrl: './trend-list.component.html',
  styleUrls: ['./trend-list.component.css']
})
export class TrendListComponent implements OnInit, OnDestroy {

  trendList = [];
  subscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.subscription = this.userService.getCurrentUser().subscribe(user => {
      if (!user)
        return;
      this.trendList = user.trends;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
