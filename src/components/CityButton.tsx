import { useAppDispatch } from '../app/hooks';
import { setCityIsClicked, setWeatherData, setLoading } from './cityText/cityText.slice';

const CityButton = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <button
        className="w-14 h-10 absolute top-1/2 translate-y-[-50%] right-2 hover:opacity-50"
        onClick={(e) => {
          e.preventDefault();
          dispatch(setWeatherData([]));
          dispatch(setLoading(true));
          dispatch(setCityIsClicked(true));
        }}
      >
        🔍
      </button>
    </>
  );
};

export default CityButton;
