import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { API, FORECAST, WEATHER } from "../constans/config";
import { Units } from "../enums/units.enum";

@Injectable()
export class WeatherApi {

    private readonly API = API;
    private readonly API_KEY = environment.apiKey;

    private readonly units = Units;

    constructor(
        private readonly _httpClient: HttpClient
    ) { }

    /**
     * @param cityName name of the city
     * @param unit unit name that values should be converted
     * @returns Observable<any> - model data should be declared and returned but 'any' is used to save a time in this case
     */
    fetchWeatherByCityName(cityName: string, unit: Units = this.units.METRIC): Observable<any> {
        return this._httpClient.get<any>(this.API + WEATHER, { params: this.getParameters(cityName, unit) });
    }

    /**
     * @param cityName name of the city
     * @param unit unit name that values should be converted
     * @returns Observable<any> - model data should be declared and returned but 'any' is used to save a time in this case
     */
    fetchForecastByCityName(cityName: string, unit: Units = this.units.METRIC): Observable<any> {
        return this._httpClient.get<any>(this.API + FORECAST, { params: this.getParameters(cityName, unit) });
    }

    getParameters(cityName: string, unit: Units = this.units.METRIC): HttpParams {
        return new HttpParams()
            .append('q', cityName)
            .append('appid', this.API_KEY)
            .append('units', unit);
    }
}