import { FC } from 'react'
import {
	ResponsiveContainer,
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis, // Tooltip,
} from 'recharts'
import { Heading } from '@components/UI'
import { parseHistory } from '@utils/exerciseUtils'
import { IHistory } from '@interfaces/IExercise'
import styles from './ExerciseChart.module.scss'
import { configuration } from './chart.data'

interface IProps {
	data: IHistory[] | undefined
	name: string | undefined
}

const ExerciseChart: FC<IProps> = ({ data, name }) => {
	const exercise = parseHistory(data)

	return (
		<section className={styles.wrapper}>
			<Heading size='small' uppercase>
				<b className='text-black-light'>{name}</b> - Изменение веса
			</Heading>
			<div className={styles.chart}>
				<ResponsiveContainer height={450}>
					<LineChart data={exercise} {...configuration.lineChart}>
						<CartesianGrid {...configuration.grid} />
						<XAxis {...configuration.XAxis} />
						<YAxis type='number' {...configuration.YAxis} />
						<Line type='monotone' {...configuration.line} />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</section>
	)
}

export default ExerciseChart
