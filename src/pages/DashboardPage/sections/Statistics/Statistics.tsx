import { FC } from 'react'
import { useQuery } from 'react-query'
import CardStat from '@components/CardStat/CardStat'
import {
	countCalories,
	recordsProgress,
	reduceTrainings,
} from '@utils/recordsUtils'
import { RecordsSevice } from '@services/records'
import styles from './Statistics.module.scss'
import calendar from '@assets/images/calendar.png'
import calories from '@assets/images/calories.png'
import cardio from '@assets/images/cardio.png'
import weights from '@assets/images/weights.png'

const Statistics: FC = () => {
	const { data, isFetched } = useQuery('records', () =>
		RecordsSevice.fetchAllRecords(),
	)

	return (
		<section className={styles.statistics}>
			<CardStat
				image={weights}
				title='Силовых тренировок'
				value={reduceTrainings(data?.data, 1)}
			/>
			<CardStat
				image={cardio}
				title='Кардио тренировок'
				value={reduceTrainings(data?.data, 2)}
			/>
			<CardStat
				image={calendar}
				title='Общий прогресс'
				value={recordsProgress(data?.data)}
			/>
			<CardStat
				image={calories}
				title='Всего калорий сгорело'
				value={countCalories(data?.data)}
			/>
		</section>
	)
}

export default Statistics
