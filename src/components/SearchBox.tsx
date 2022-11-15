import CityInput from './CityInput';
import CityButton from './CityButton';
import PieChart from './PieChart';
import { useAppSelector } from '../app/hooks';
import { WeatherType } from '../interface/weather';

const SearchBox = () => {
  const weatherData: WeatherType[] = useAppSelector((state) => state.cityText.weatherData);
  const humidity = weatherData.length > 0 && weatherData[0].list[0].main.humidity;
  return (
    <>
      <>
        <div className="w-full h-80 bg-blue-50 pt-5 md:pt-10 flex justify-center ">
          <div className="w-full md:w-1/3 h-14 rounded-2xl bg-white md:mx-auto flex flex-wrap content-start relative mx-5">
            <CityInput />
            <CityButton />
            <PieChart data={weatherData} humidity={humidity} />
          </div>
        </div>
      </>
    </>
  );
};

export default SearchBox;
