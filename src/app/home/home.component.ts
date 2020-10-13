import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() home;
  isMarked = false;
  private concole: any;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onClick() {

    this.isMarked  = true;
  }

}
