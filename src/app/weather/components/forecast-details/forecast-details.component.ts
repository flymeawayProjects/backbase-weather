import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ForecastWeather } from '../../models/forecast-weather.class';
import { WeatherFacade } from '../../weather.facade';

const PARAM = 'cityName';

@Component({
  selector: 'app-forecast-details',
  templateUrl: './forecast-details.component.html',
  styleUrls: ['./forecast-details.component.scss']
})
export class ForecastDetailsComponent implements OnInit {

  private _cityName!: string;
  public forecastData$!: Observable<ForecastWeather[]>;

  constructor(
    private readonly _weatherFacade: WeatherFacade,
    private readonly _activatedRoute: ActivatedRoute
  ) {
    this.cityName = this._activatedRoute.snapshot.queryParams[PARAM];
  }

  ngOnInit(): void {
    this.setForecastData();
  }

  setForecastData(): void {
    this.forecastData$ = this._weatherFacade.fetchForecastWeatherByCity(this.cityName);
  }

  set cityName(value: string) {
    this._cityName = value;
  }

  get cityName(): string {
    return this._cityName;
  }
}
