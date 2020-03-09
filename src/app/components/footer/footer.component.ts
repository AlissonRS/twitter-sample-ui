import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public items = [
    { label: "Privacy policy" },
    { label: "Cookies" },
    { label: "Ads info" },
    { label: "More" }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
