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
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  dt_txt: string;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
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

export interface WeatherDetailType {
  date: string;
  temp: number;
  fellTemp: number;
  weather: string;
  icon: string;
  pop: number;
}

export interface UsefulDataType {
  cloud: number;
  wind: number;
  sunrise: number;
  sunset: number;
}
