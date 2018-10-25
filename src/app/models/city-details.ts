export class CityDetails{
    cityName: string;
    stateCode: string;
    countryCode: string;
    timezone: string;
    latitude: number;
    longitude: number;

    constructor(results){
        this.cityName = results['city_name'];
        this.stateCode = results['state_code'];
        this.countryCode = results['country_code'];
        this.timezone = results['timezone'];
        this.latitude = results['lat'];
        this.longitude = results['lon'];
    }
}