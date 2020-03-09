import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {

  tweets: Tweet[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      if (!user)
        return;
      this.tweets = user.timelineTweets.sort((a,b) => a.order - b.order);
    });
  }

  tweetId(index: number, tweet: Tweet) {
    return tweet.tweetId;
  }

}
