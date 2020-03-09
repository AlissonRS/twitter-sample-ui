import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-new-tweet',
  templateUrl: './new-tweet.component.html',
  styleUrls: ['./new-tweet.component.css']
})
export class NewTweetComponent implements OnInit {

  user: User;
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => this.user = user);
  }

}
