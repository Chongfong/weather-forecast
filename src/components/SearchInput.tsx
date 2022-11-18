import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  setCity,
  setCurrentInput,
  setCityIsClicked,
  setErrorMessage,
  setWeatherData,
  setLoading,
} from './weatherForecast/weatherForecast.slice';
import cities from '../city.list.json';
import { useEffect, useState } from 'react';
import { CityType } from '../interface/weather';
import api from '../utils/api';

const initialCities = cities as CityType[];

export const SearchInput = () => {
  const dispatch = useAppDispatch();
  const [inputFocus, setInputFocus] = useState(false);
  const currentInput = useAppSelector((state) => state.cityText.currentInput);
  const cityText = useAppSelector((state) => state.cityText.city);
  const cityIsClicked = useAppSelector((state) => state.cityText.isClicked);
  const [cityList] = useState<CityType[]>(
    initialCities
      .slice(Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000 + 1000))
      .filter((value, index, self) => index === self.findIndex((t) => t.name === value.name))
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    dispatch(setErrorMessage(''));
    dispatch(setCurrentInput(e.target.value));
    dispatch(setCityIsClicked(false));
  };
  const handleKeyboardEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      dispatch(setCity(currentInput));
      dispatch(setCityIsClicked(true));
      dispatch(setWeatherData([]));
      dispatch(setLoading(true));
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
    api.getWeather(lat, lon).then((json) => {
      dispatch(setWeatherData([json]));
      dispatch(setLoading(false));
    });
  };

  const handleFetch = async (city: string) => {
    api
      .getPosition(city)
      .then((json) => {
        if (json.length === 0) {
          dispatch(setLoading(false));
          dispatch(setErrorMessage('No such data'));
        } else {
          return [json[0].lat, json[0].lon];
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
        value={currentInput}
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
            .filter((a) => a.name.slice(0, currentInput.length).toLowerCase() === currentInput.toLowerCase())
            .slice(0, 5)
            .map((e) => (
              <div
                className="my-1 hover:bg-gray-300 hover:cursor-pointer hover:text-stone-800 hover:font-bold pl-5 rounded-lg"
                key={e.id}
              >
                <div
                  onClick={() => {
                    dispatch(setWeatherData([]));
                    dispatch(setLoading(true));
                    dispatch(setCity(e.name));
                    dispatch(setCurrentInput(e.name));
                    dispatch(setCityIsClicked(true));
                  }}
                >{`${e.name}, ${e.country}`}</div>
              </div>
            ))}
      </div>
    </>
  );
};

export default SearchInput;
