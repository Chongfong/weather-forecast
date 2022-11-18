import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setCityIsClicked, setCity, setWeatherData, setLoading } from './weatherForecast/weatherForecast.slice';

const SearchButton = () => {
  const dispatch = useAppDispatch();
  const currentInput = useAppSelector((state) => state.cityText.currentInput);
  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(setWeatherData([]));
    dispatch(setCity(currentInput));
    dispatch(setLoading(true));
    dispatch(setCityIsClicked(true));
  };
  return (
    <>
      <button
        className="w-14 h-10 absolute top-1/2 translate-y-[-50%] right-2 hover:opacity-50"
        onClick={(e) => {
          handleSearch(e);
        }}
      >
        🔍
      </button>
    </>
  );
};

export default SearchButton;
