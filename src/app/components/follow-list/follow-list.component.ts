import { Component, OnInit } from '@angular/core';
import { Follow } from 'src/app/models/follow.model';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-follow-list',
  templateUrl: './follow-list.component.html',
  styleUrls: ['./follow-list.component.css']
})
export class FollowListComponent implements OnInit {

  public followList: Follow[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      if (!user)
        return;
      this.followList = user.whoToFollow;
    });
  }

  public dismissFollowSuggestion(followSuggestion: Follow) {

  }

}
