import { WeatherType } from '../interface/weather';

const PieChart = ({ title, data, humidity }: { title: string; data: WeatherType[]; humidity: number | boolean }) => {
  return (
    <>
      {data.length > 0 && (
        <div className="w-full md:w-4/5 text-base mx-auto flex justify-center flex-wrap">
          <p className="w-full text-xl md:text-2xl text-slate-700 my-2">{title}</p>
          <svg width="40%" height="40%" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>
            <circle
              cx="20"
              cy="20"
              r="15.91549430918954"
              fill="transparent"
              strokeWidth="3.5"
              className="stroke-gray-200"
            ></circle>
            <circle
              cx="20"
              cy="20"
              r="15.91549430918954"
              fill="transparent"
              strokeWidth="3.5"
              strokeDasharray={`${humidity} ${100 - Number(humidity)}`}
              strokeDashoffset="25"
              className="stroke-sky-600"
            ></circle>
            <g className="fill-sky-600">
              <text y="50%" transform="translate(0, 2)">
                <tspan x="50%" textAnchor="middle" className="text-[0.5rem] leading-4 translate-y-0 font-bold">
                  {humidity}%
                </tspan>
              </text>
            </g>
          </svg>
        </div>
      )}
    </>
  );
};

export default PieChart;
