import PieChart from './PieChart';
import BarChart from './BarChart';
import WeatherData from './WeatherData';
import UsefulData from './UsefulData';
import Loader from './Loader';
import { useAppSelector } from '../app/hooks';
import { WeatherType, BarType, UsefulDataType } from '../interface/weather';
import { transformDate } from '../utils/share';
import { useEffect, useState } from 'react';

const ForeCast = () => {
  const [checkedCity, setCheckedCity] = useState('');
  const weatherData: WeatherType[] = useAppSelector((state) => state.cityText.weatherData);
  const isLoading = useAppSelector((state) => state.cityText.loading);
  const errorMessage = useAppSelector((state) => state.cityText.errorMessage);
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
      {weatherData.length > 0 ? (
        <div className="w-full md:w-2/3 flex flex-wrap mx-auto p-10 lg:p-0">
          <div className="mx-auto mt-5 text-slate-700 font-bold lg:hidden">{checkedCity}</div>
          <div className="w-full flex flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row m">
            <div className="w-full flex flex-wrap content-between py-10 lg:pr-5">
              <div className="mx-auto mt-5 text-slate-700 font-bold hidden lg:block">{checkedCity}</div>
              <PieChart title={'Humidity'} data={weatherData} humidity={humidity} />
              <UsefulData data={usefulData} />
            </div>
            <div className="w-full flex flex-wrap py-10 lg:pl-5">
              <WeatherData />
            </div>
          </div>
          <div className="w-full flex flex-wrap lg:flex-nowrap mb-5 lg:mt-5 lg:mb-16">
            <div className="w-full mb-10 lg:mb-0">
              <BarChart title={'Max Temperature'} data={max} />
            </div>
            <div className="w-full">
              <BarChart title={'Min Temperature'} data={min} />
            </div>
          </div>
        </div>
      ) : (
        <>
          {isLoading && <Loader />}
          <p className="my-10 text-slate-700 font-bold">{errorMessage}</p>
        </>
      )}
    </>
  );
};

export default ForeCast;
