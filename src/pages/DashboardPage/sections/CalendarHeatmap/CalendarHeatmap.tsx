import { FC } from 'react'
import { useQuery } from 'react-query'
import { RecordsSevice } from '@services/records'
import styles from './CalendarHeatmap.module.scss'

const CalendarHeatmap: FC = () => {
	const { data } = useQuery('records', () => RecordsSevice.fetchAllRecords())
	console.log(data)
	return <section className={styles.calendar}>CalendarHeatmap</section>
}

export default CalendarHeatmap
