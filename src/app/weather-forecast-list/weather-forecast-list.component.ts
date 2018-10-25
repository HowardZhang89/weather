import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { weatherBit } from '../../environments/environment';
import { CityDetails } from '../models/city-details';
import { WeatherForecast} from '../models/weather-forecasts';

@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.css']
})
export class WeatherForecastListComponent implements OnInit {
  @Input() searchText: string;  // passed in from app.component.html
  weatherBitUrl: string;
  weatherForecasts: WeatherForecast[];  // will convert this later into type WeatherForecast
  cityDetails: CityDetails;

  constructor(private http: HttpClient) {
    // searchString will be passed in via Input()
    this.weatherForecasts = [];
    this.weatherBitUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=${weatherBit.apiKey}`;
   }

   getWeather(){
    this.weatherBitUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${this.searchText}&key=${weatherBit.apiKey}`;
    this.http.get(this.weatherBitUrl).subscribe( (results: any[]) => {
  		console.log('WEATHER RESULTS ....');
  		console.log(results);
      console.log('WEATHER RESULTS ....');
      
      /*  
      // I couldn't get the raw Data ==> WeatherForecast conversion to work. 
      // convert each item in results to a WeatherForecast object
      for(let data in results['data']){
        this.weatherForecasts.push(new WeatherForecast(data));
      }
      */
      this.weatherForecasts = results['data'];
      this.cityDetails = new CityDetails(results);
    }); 
  }
  ngOnInit() {
  }

}
