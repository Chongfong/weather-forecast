import PieChart from './PieChart';
import BarChart from './BarChart';
import { useAppSelector } from '../app/hooks';
import { WeatherType, BarType } from '../interface/weather';
import { transformDate } from '../utils/share';

const ForeCast = () => {
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
  return (
    <>
      {weatherData.length > 0 && (
        <div className="w-96 md:w-2/3 flex flex-wrap mx-auto">
          <div className="w-full flex flex-nowrap">
            <div className="w-full ">
              <PieChart title={'Humidity'} data={weatherData} humidity={humidity} />
            </div>
            <div className="w-full"></div>
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
