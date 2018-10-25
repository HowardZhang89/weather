export class WeatherForecast{

    datetime: string;
    temp: number;
    maxTemp: number;
    minTemp: number;
    description: any;
    windSpeed: any;
    windDir: any;
    clouds: number;
    
    // the constructor doesn't seem to work properly
    constructor(results){
        this.datetime = results['date_time'];
        this.temp = results['temp'];
        this.maxTemp = results['max_temp'];
        this.minTemp = results['min_temp'];
        this.description = results['description'];
        this.windSpeed = results['wind_spd'];
        this.windDir = results['wind_dir'];
        this.clouds = results['clouds'];
    }
}