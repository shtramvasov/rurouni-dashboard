import { FC } from 'react'
import { useQuery } from 'react-query'
import CardStat from '@components/CardStat/CardStat'
import { reduceTrainings } from '@utils/reduceTrainings'
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

	const cardioCount = reduceTrainings(data?.data, 1)
	// const cardioCount = data?.data.filter(item => item.category > 1)
	console.log(cardioCount)
	return (
		<section className={styles.statistics}>
			<CardStat image={weights} title='Силовых тренировок' value={242} />
			<CardStat image={cardio} title='Кардио тренировок' value={242} />
			<CardStat image={calendar} title='Общий прогресс' value={242} />
			<CardStat image={calories} title='Всего калорий сгорело' value={242} />
		</section>
	)
}

export default Statistics
