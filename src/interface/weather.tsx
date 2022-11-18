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
  list: List[];
  city: City;
}

export interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  pop: number;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
}

export interface Weather {
  id: number;
  description: string;
  icon: string;
}

export interface City {
  id: number;
  name: string;
  coord: CityLocationType;
  country: string;
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
