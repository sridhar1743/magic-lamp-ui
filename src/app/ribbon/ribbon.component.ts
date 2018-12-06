import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.css']
})
export class RibbonComponent implements OnInit {
  categories = ['All','Furniture','Electronics','Fashion','Sports','Kitchen','Bedding'];
  constructor() { }

  ngOnInit() {
  }

}
