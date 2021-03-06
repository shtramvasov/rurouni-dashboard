import React from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import {format, parseISO} from 'date-fns';
import { ru } from 'date-fns/locale';

export default function ExerciseChart({ data }) {
  return (
		<div className='exercise-page-chart__chart flex cols'>
			<ResponsiveContainer width='99%' height={500}>
				<LineChart
					data={data}
					cursor='pointer'
					margin={{
						bottom: 70,
						right: 40,
						left: 20,
					}}
				>
					<CartesianGrid strokeDasharray='3 3' opacity={0.7} />
					<XAxis
						dataKey='date'
						dy={8}
						stroke='94A3B8'
						tickSize={15}
						tick={{ fill: '#94A3B8', fontSize: 12 }}
						tickFormatter={(str) => {
							const date = parseISO(str);
							if (date.getDate()) {
								return format(date, 'd MMM', { locale: ru });
							}
							return '';
						}}
					/>
					<YAxis
						stroke='94A3B8'
						tickCount={8}
						dx={-15}
						tickSize={10}
						type='number'
						domain={['dataMin - 10', 'dataMax + 10']}
						tick={{ fill: '#94A3B8', fontSize: 12 }}
					/>
					<Tooltip content={<CustomTooltip />} />
					<Line
						type='monotone'
						activeDot={{ fill: '#49C576', r: 6 }}
						dataKey='weight'
						stroke='#4ADE80'
						strokeWidth='2'
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}

const CustomTooltip = ({active, payload}) => {
  if (active && payload && payload.length) {
    return (
      <div className='chart-tooltip'>
        <p>Вес на момент тренировки:</p>
        <span>{payload[0].value}</span>
      </div>
    )
  }
  return null;
};
