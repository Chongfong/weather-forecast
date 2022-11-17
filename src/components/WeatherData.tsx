import React from 'react';
import { useAppSelector } from '../app/hooks';
import { WeatherType, WeatherDetailType } from '../interface/weather';
import { transformDate } from '../utils/share';

const WeatherData = () => {
  const weatherData: WeatherType[] = useAppSelector((state) => state.cityText.weatherData);
  const detail: WeatherDetailType[] = [];
  for (let i = 2; i < 40; i += 8) {
    if (weatherData.length > 0) {
      detail.push({
        date: transformDate(weatherData[0].list[i].dt),
        temp: weatherData[0].list[i].main.temp,
        fellTemp: weatherData[0].list[i].main.feels_like,
        weather: weatherData[0].list[i].weather[0].description,
        icon: `https://openweathermap.org/img/wn/${weatherData[0].list[i].weather[0].icon}@4x.png`,
        pop: weatherData[0].list[i].pop * 100,
      });
    }
  }
  return (
    <>
      <div className="w-full flex flex-nowrap">
        <div className="w-full">
          <img className="mx-auto" src={detail[0].icon} />
        </div>
        <div className="w-full py-8">
          <div className="text-3xl text-red-400">{`${Math.round(detail[0].temp)} °C`}</div>
          <div className="text-xl text-indigo-300">{`Feel like ${Math.round(detail[0].fellTemp)} °C`}</div>
          <div className="text-xl text-slate-700">{detail[0].weather}</div>
          <div className="text-black opacity-70">{`💧 ${detail[0].pop} %`}</div>
        </div>
      </div>
      <div className="w-full flex flex-nowrap">
        {detail.map(
          (day, i) =>
            i !== 0 && (
              <div className="w-full" key={day.fellTemp}>
                <div className="text-xl text-slate-700">{day.date}</div>
                <div>
                  <img className="mx-auto" src={day.icon} />
                </div>
                <div className="text-2xl text-red-400">{`${Math.round(day.temp)} °C`}</div>
                <div className="text-xl text-black opacity-70">{`💧 ${Math.round(day.pop)} %`}</div>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default WeatherData;
