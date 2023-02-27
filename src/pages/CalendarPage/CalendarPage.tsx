import { FC } from 'react'
import Layout from '@components/Layout/Layout'
import { Heading, Loader } from '@components/UI'
import { localeDate } from '@utils/convertDates'
import { useRecords } from '@hooks/useRecords'
import styles from './CalendarPage.module.scss'

const CalendarPage: FC = () => {
	const { data: records, isFetched } = useRecords()
	return (
		<Layout>
			{isFetched ? (
				<div className={styles.wrapper}>
					<Heading size='small' uppercase>
						Проведенные тренировки
					</Heading>
					<ul className={styles.list}>
						{records?.data.map(record => (
							<li className={styles.listItem} key={record.id}>
								<b>{record.name}</b>
								<p className={styles.desc}>
									{localeDate(record.date)},
									<span>Сгорело калорий: {record.calories}</span>
								</p>
							</li>
						))}
					</ul>
				</div>
			) : (
				<Loader />
			)}
		</Layout>
	)
}

export default CalendarPage
