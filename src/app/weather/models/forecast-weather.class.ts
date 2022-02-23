import { WeatherData } from "./weather-data.class";

export class ForecastWeather extends WeatherData {

    public date: Date;

    constructor(data: ForecastWeather) {
        super(data);
        this.date = data.date;
    }
}