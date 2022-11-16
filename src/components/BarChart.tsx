import React from 'react';
import { BarType } from '../interface/weather';

function BarGroup({ d, barHeight }: { d: { name: string; value: number }; barHeight: number }) {
  const barPadding = 2;
  const barColour = d.value > 0 ? '#D01B1B' : '#0284c7';
  const widthScale = (d: number) => d * 7;

  const width = widthScale(Math.abs(d.value));
  const yMid = barHeight * 0.5;
  const textPosition = Math.abs(d.value) > 8 ? 'end' : 'start';
  const textColor = Math.abs(d.value) > 8 ? 'white' : 'black';

  return (
    <g>
      <text className="text-base fill-slate-700" x="-6" y={yMid} alignmentBaseline="middle" textAnchor="end">
        {d.name}
      </text>
      <g className="opacity-60 hover:cursor-pointer hover:opacity-100">
        <rect y={barPadding * 0.5} width={width} height={barHeight - barPadding} fill={barColour} />
        <text
          className="text-base"
          x={width - 8}
          y={yMid}
          alignmentBaseline="middle"
          textAnchor={textPosition}
          fill={textColor}
        >
          {`${Math.round(d.value * 10) / 10} °C`}
        </text>
      </g>
    </g>
  );
}

const BarChart = ({ title, data }: { title: string; data: BarType[] }) => {
  const barHeight = 30;

  const barGroups = data.map((d, i) => (
    <React.Fragment key={d.name}>
      <g transform={`translate(0, ${i * barHeight})`}>
        <BarGroup d={d} barHeight={barHeight} />
      </g>
    </React.Fragment>
  ));

  return (
    <>
      <div className="w-full md:4/5 flex flex-wrap justify-center">
        <div className="w-full">
          <svg width="100%" height="220">
            <g>
              <g transform="translate(100,60)">{barGroups}</g>
            </g>
            <text className="fill-slate-700" x="150" y="30">
              {title}
            </text>
          </svg>
        </div>
      </div>
    </>
  );
};

export default BarChart;
