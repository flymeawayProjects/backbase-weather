export class WeatherData {

    public cityName: string;
    public temperature: number;
    public windStrength: number;
    public icon: string;

    constructor(data: WeatherData) {
        this.cityName = data.cityName;
        this.temperature = data.temperature;
        this.windStrength = data.windStrength;
        this.icon = data.icon;
    }
}