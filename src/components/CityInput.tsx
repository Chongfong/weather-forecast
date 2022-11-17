import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setCity, setCityIsClicked, setErrorMessage, setWeatherData } from './cityText/cityText.slice';
import cities from '../city.list.json';
import { useEffect, useState } from 'react';
import { CityType } from '../interface/weather';

const apiKey = process.env.REACT_APP_OPENWEATHER_APIKEY;

const initialCities = cities as CityType[];

export const CityInput = () => {
  const dispatch = useAppDispatch();
  const [inputFocus, setInputFocus] = useState(false);
  const cityText = useAppSelector((state) => state.cityText.city);
  const cityIsClicked = useAppSelector((state) => state.cityText.isClicked);
  const [cityList] = useState<CityType[]>(
    initialCities
      .slice(Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000 + 500))
      .filter((value, index, self) => index === self.findIndex((t) => t.name === value.name))
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    dispatch(setErrorMessage(''));
    dispatch(setCity(e.target.value));
    dispatch(setCityIsClicked(false));
  };
  const handleKeyboardEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      dispatch(setCityIsClicked(true));
      dispatch(setWeatherData([]));
    }
  };
  const handleFocus = () => {
    setInputFocus(true);
  };
  const handleFocusOut = () => {
    if (!cityIsClicked) {
      setInputFocus(false);
    }
  };

  const fetchWeather = (lat: number, lon: number) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat.toString()}&lon=${lon.toString()}&appid=${apiKey}&units=metric`
    )
      .then((data) => data.json())
      .then((res) => dispatch(setWeatherData([res])));
  };

  const handleFetch = async (city: string) => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((data) => {
        if (data.length === 0) {
          dispatch(setErrorMessage('No such data'));
        } else {
          return [data[0].lat, data[0].lon];
        }
      })
      .then((location) => location && fetchWeather(location[0], location[1]));
  };
  useEffect(() => {
    if (cityIsClicked) {
      handleFetch(cityText);
    }
  }, [cityIsClicked]);
  return (
    <>
      <input
        className="w-full h-14 mx-5"
        value={cityText}
        placeholder="Search a city"
        onChange={handleChange}
        onKeyDown={handleKeyboardEvent}
        onFocus={handleFocus}
        onBlur={() => {
          setTimeout(handleFocusOut, 500);
        }}
      ></input>
      <div className="w-full h-auto text-left text-stone-600 rounded-b-3xl relative top-[-10px] py-3">
        {inputFocus &&
          cityList
            .filter((a) => a.name.slice(0, cityText.length).toLowerCase() === cityText.toLowerCase())
            .slice(0, 5)
            .map((e) => (
              <div
                className="my-1 hover:bg-gray-300 hover:cursor-pointer hover:text-stone-800 hover:font-bold pl-5 rounded-lg"
                key={e.id}
              >
                <div
                  onClick={() => {
                    dispatch(setWeatherData([]));
                    dispatch(setCity(e.name));
                    dispatch(setCityIsClicked(true));
                  }}
                >{`${e.name}, ${e.country}`}</div>
              </div>
            ))}
      </div>
    </>
  );
};

export default CityInput;
