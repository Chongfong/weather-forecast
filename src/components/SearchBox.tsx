import CityInput from './CityInput';
import CityButton from './CityButton';
import PieChart from './PieChart';
import BarChart from './BarChart';
import { useAppSelector } from '../app/hooks';
import { WeatherType, BarType } from '../interface/weather';
import { transformDate } from '../utils/share';

const SearchBox = () => {
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
      <>
        <div className="w-full h-80 bg-blue-50 pt-5 md:pt-10 flex justify-center ">
          <div className="w-full md:w-1/3 h-14 rounded-2xl bg-white md:mx-auto flex flex-wrap content-start relative mx-5">
            <CityInput />
            <CityButton />
            <PieChart data={weatherData} humidity={humidity} />
            <BarChart data={max} />
            <BarChart data={min} />
          </div>
        </div>
      </>
    </>
  );
};

export default SearchBox;
