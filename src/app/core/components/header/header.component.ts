import { Component, OnInit } from '@angular/core';
import { APP_TITLE } from '../../constans/config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  readonly title: string = APP_TITLE;

  constructor() { }

  ngOnInit(): void {
  }

}
