import { FC } from 'react'
import Layout from '@components/Layout/Layout'
import { localeDate } from '@utils/convertDates'
import { useRecords } from '@hooks/useRecords'

const CalendarPage: FC = () => {
	const { data: records, isFetched } = useRecords()
	return (
		<Layout>
			{isFetched ? (
				records?.data.map(record => (
					<p key={record.id}>
						{record.name} - {localeDate(record.date)}
					</p>
				))
			) : (
				<p>Load</p>
			)}
		</Layout>
	)
}

export default CalendarPage
