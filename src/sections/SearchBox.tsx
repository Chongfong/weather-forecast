import CityInput from '../components/SearchInput';
import CityButton from '../components/SearchButton';

const SearchBox = () => {
  return (
    <>
      <>
        <div className="w-full h-96 bg-blue-50 pt-5 md:pt-10 flex justify-center flex-wrap content-start">
          <p className="w-full mx-auto text-3xl text-blue-500 mb-5 font-bold">☀ Weather Forecast</p>
          <div className="w-full md:w-1/2 md:min-w-[500px] h-14 rounded-2xl bg-white md:mx-auto flex flex-wrap content-start relative mx-5">
            <CityInput />
            <CityButton />
          </div>
        </div>
      </>
    </>
  );
};

export default SearchBox;
