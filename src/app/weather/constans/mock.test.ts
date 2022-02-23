import { ForecastWeather } from "../models/forecast-weather.class";
import { WeatherData } from "../models/weather-data.class";

export const ForecastDataMock = new ForecastWeather({
    cityName: 'Bangkok',
    temperature: 10,
    windStrength: 20,
    date: new Date(),
    icon: 'no-icon'
});

export const WeatherDataMock = new WeatherData({
    cityName: 'Bangkok',
    temperature: 15,
    windStrength: 20,
    icon: 'no-icon-again'
})