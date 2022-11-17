import { UsefulDataType } from '../interface/weather';
import { transformHour } from '../utils/share';

const UsefulData = ({ data }: { data: UsefulDataType[] }) => {
  return (
    <>
      <div className="w-full grid grid-rows-2 grid-flow-col text-xl text-slate-700 my-5 px-5">
        <div className="w-full h-14">cloud</div>
        <div className="w-full h-14">{`${Math.round(data[0].cloud)} %`}</div>
        <div className="w-full h-14">wind</div>
        <div className="w-full h-14">{`${data[0].wind} m/s`}</div>
        <div className="w-full h-14">sunrise</div>
        <div className="w-full h-14">{`${transformHour(data[0].sunrise)}`}</div>
        <div className="w-full h-14">sunset</div>
        <div className="w-full h-14">{`${transformHour(data[0].sunset)}`}</div>
      </div>
    </>
  );
};

export default UsefulData;
