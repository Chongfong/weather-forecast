import PieChart from './PieChart';
import BarChart from './BarChart';
import WeatherData from './WeatherData';
import UsefulData from './UsefulData';
import { useAppSelector } from '../app/hooks';
import { WeatherType, BarType, UsefulDataType } from '../interface/weather';
import { transformDate } from '../utils/share';
import { useEffect, useState } from 'react';

const ForeCast = () => {
  const [checkedCity, setCheckedCity] = useState('');
  const weatherData: WeatherType[] = useAppSelector((state) => state.cityText.weatherData);
  const humidity = weatherData.length > 0 && weatherData[0].list[0].main.humidity;
  const max: BarType[] = [];
  for (let i = 0; i < 40; i += 8) {
    if (weatherData.length > 0) {
      const maxTemp = weatherData[0].list.slice(i, i + 8).reduce(function (acc, n) {
        if (n.main.temp_max > acc) {
          acc = n.main.temp_max;
        }
        return acc;
      }, 0);
      max.push({ name: transformDate(weatherData[0].list[i].dt), value: maxTemp });
    }
  }
  const min: BarType[] = [];
  for (let i = 0; i < 40; i += 8) {
    if (weatherData.length > 0) {
      const minTemp = weatherData[0].list.slice(i, i + 8).reduce(function (acc, n) {
        if (n.main.temp_min < acc) {
          acc = n.main.temp_min;
        }
        return acc;
      }, 200);
      min.push({ name: transformDate(weatherData[0].list[i].dt), value: minTemp });
    }
  }
  const usefulData: UsefulDataType[] = [];
  if (weatherData.length > 0) {
    usefulData.push({
      cloud: weatherData[0].list[2].clouds.all,
      wind: weatherData[0].list[2].wind.speed,
      sunrise: weatherData[0].city.sunrise,
      sunset: weatherData[0].city.sunset,
    });
  }
  useEffect(() => {
    if (weatherData.length > 0) {
      setCheckedCity(`${weatherData[0].city.name}, ${weatherData[0].city.country}`);
    }
  }, [weatherData]);
  return (
    <>
      {weatherData.length > 0 && (
        <div className="w-96 md:w-2/3 flex flex-wrap mx-auto">
          <div className="mx-auto my-5">{checkedCity}</div>
          <div className="w-full flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row m">
            <div className="w-full ">
              <PieChart title={'Humidity'} data={weatherData} humidity={humidity} />
              <UsefulData data={usefulData} />
            </div>
            <div className="w-full flex flex-wrap">
              <WeatherData />
            </div>
          </div>
          <div className="w-full flex flex-wrap lg:flex-nowrap">
            <div className="w-full">
              <BarChart title={'Max Temperature'} data={max} />
            </div>
            <div className="w-full">
              <BarChart title={'Min Temperature'} data={min} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ForeCast;
