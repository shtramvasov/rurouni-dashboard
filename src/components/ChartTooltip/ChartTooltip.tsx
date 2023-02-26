import { FC } from 'react'
import styles from './ChartTooltip.module.scss'

interface IProps {
	active: boolean
	payload: any
}

const ChartTooltip: FC<IProps> = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div className={styles.chartTooltip}>
				<p>Вес на момент тренировки:</p>
				<span>{payload[0].value}</span>
			</div>
		)
	}
	return null
}

export default ChartTooltip
