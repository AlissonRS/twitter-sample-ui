import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.css']
})
export class UserStatsComponent implements OnInit {

  user: User;
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.user = user;
    });
  }

}
