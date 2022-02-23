import { Component, Input, OnInit } from '@angular/core';
import { ForecastWeather } from '../../models/forecast-weather.class';

@Component({
  selector: 'app-forecast-details-item',
  templateUrl: './forecast-details-item.component.html',
  styleUrls: ['./forecast-details-item.component.scss']
})
export class ForecastDetailsItemComponent implements OnInit {

  @Input() forecastDetails!: ForecastWeather;

  constructor() { }

  ngOnInit(): void { }

}
