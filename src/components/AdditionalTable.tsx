import { UsefulDataType } from '../interface/weather';
import { transformHour } from '../utils/share';

const AdditionalTable = ({ data }: { data: UsefulDataType[] }) => {
  return (
    <>
      <div className="w-full text-xl text-slate-700 my-5 md:my-0 lg:px-5">
        <div className="w-full grid grid-rows-2 grid-flow-col border-2 border-blue-100 rounded-2xl">
          <div className="w-full h-10 leading-10 bg-blue-100 rounded-tl-2xl">cloud</div>
          <div className="w-full h-10 leading-10">{`${Math.round(data[0].cloud)} %`}</div>
          <div className="w-full h-10 leading-10 bg-blue-100">wind</div>
          <div className="w-full h-10 leading-10">{`${data[0].wind} m/s`}</div>
          <div className="w-full h-10 leading-10 bg-blue-100">sunrise</div>
          <div className="w-full h-10 leading-10 ">{`${transformHour(data[0].sunrise)}`}</div>
          <div className="w-full h-10 leading-10 bg-blue-100 rounded-tr-2xl">sunset</div>
          <div className="w-full h-10 leading-10">{`${transformHour(data[0].sunset)}`}</div>
        </div>
      </div>
    </>
  );
};

export default AdditionalTable;
