import React from 'react';
import { BarType } from '../interface/weather';

function BarGroup({ d, barHeight }: { d: { name: string; value: number }; barHeight: number }) {
  const barPadding = 2;
  const barColour = d.value > 0 ? '#D01B1B' : '#0284c7';
  const widthScale = (d: number) => d * 10;

  const width = widthScale(Math.abs(d.value));
  const yMid = barHeight * 0.5;
  const textPosition = Math.abs(d.value) > 5 ? 'end' : 'start';
  const textColor = Math.abs(d.value) > 5 ? 'white' : 'black';

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

const BarChart = ({ data }: { data: BarType[] }) => {
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
      <svg width="800" height="300">
        <g className="container">
          <g transform="translate(100,60)">{barGroups}</g>
        </g>
      </svg>
    </>
  );
};

export default BarChart;
