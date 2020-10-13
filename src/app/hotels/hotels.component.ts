import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from '../search/search.component';


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  @Input() hotels: Hotel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
