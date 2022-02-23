import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { WeatherApi } from "./api/weather.api";
import { ForecastWeather } from "./models/forecast-weather.class";
import { WeatherData } from "./models/weather-data.class";

@Injectable()
export class WeatherFacade {
    constructor(
        private readonly _weatherApi: WeatherApi
    ) { }

    fetchWeatherByCity(cityName: string): Observable<WeatherData> {
        return this._weatherApi.fetchWeatherByCityName(cityName).pipe(
            map(data => new WeatherData({
                cityName: data.name,
                windStrength: data.wind.speed,
                temperature: data.main.temp,
                icon: data.weather[0].icon
            }))
        );
    }

    fetchAllCities(cityNames: string[]): Observable<WeatherData>[] {
        return cityNames.map(name => this.fetchWeatherByCity(name));
    }

    fetchForecastWeatherByCity(cityName: string): Observable<ForecastWeather[]> {
        return this._weatherApi.fetchForecastByCityName(cityName).pipe(
            map(data => data.list.map((item: any) => new ForecastWeather({
                cityName: cityName,
                icon: item.weather[0].icon,
                date: item.dt_txt,
                temperature: item.main.temp,
                windStrength: item.wind.speed
            })))
        );
    }
}