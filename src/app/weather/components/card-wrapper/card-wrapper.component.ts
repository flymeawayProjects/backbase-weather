import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CITIES } from '../../constans/config';
import { WeatherData } from '../../models/weather-data.class';
import { WeatherFacade } from '../../weather.facade';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss']
})
export class CardWrapperComponent implements OnInit {

  readonly availableCities = CITIES;
  public weathers$!: Observable<WeatherData>[];

  constructor(
    private readonly _weatherFacade: WeatherFacade
  ) { }

  ngOnInit(): void {
    this.setWeatherData();
  }

  setWeatherData(): void {
    this.weathers$ = this._weatherFacade.fetchAllCities(this.availableCities);
  }
}
