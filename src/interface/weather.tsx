export interface CityType {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: CityLocationType;
}

export interface CityLocationType {
  lon: number;
  lat: number;
}

export interface WeatherType {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}

export interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  visibility: number;
  pop: number;
  dt_txt: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface City {
  id: number;
  name: string;
  coord: CityLocationType;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface BarType {
  name: string;
  value: number;
}
