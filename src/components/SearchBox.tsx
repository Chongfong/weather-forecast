import CityInput from './CityInput';
import CityButton from './CityButton';

const SearchBox = () => {
  return (
    <>
      <>
        <div className="w-full h-80 bg-blue-50 pt-5 md:pt-10 flex justify-center ">
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
