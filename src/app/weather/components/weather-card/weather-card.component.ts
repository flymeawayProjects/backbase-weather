import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from '../../models/weather-data.class';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input() weatherData!: WeatherData;

  constructor() { }

  ngOnInit(): void { }

}
