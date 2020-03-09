import { Component, OnInit } from '@angular/core';
import { Trend } from 'src/app/models/trend.model';

@Component({
  selector: 'app-trend-list',
  templateUrl: './trend-list.component.html',
  styleUrls: ['./trend-list.component.css']
})
export class TrendListComponent implements OnInit {

  trendList = [
    new Trend({title: "Sarah Sanders", description: "Sarah Sanders will leave her role as White House press secretary this month"}),
    new Trend({title: "Dan Howell", description: "51K Tweets"}),
    new Trend({title: "Governor of Arkansas", description: "6,907 Tweets"}),
    new Trend({title: "#ThursdayThougths", description: "87.6K Tweets"}),
    new Trend({title: "Hatch Act", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),
    new Trend({title: "Kellyanne Conway", description: "1,456 Tweets"}),
    new Trend({title: "Iran", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"}),
    new Trend({title: "Sarah Huckabee Sanders", description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"})
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
