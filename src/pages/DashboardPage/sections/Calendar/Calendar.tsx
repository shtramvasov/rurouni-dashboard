import { ResponsiveCalendar } from '@nivo/calendar'
import { FC } from 'react'
import { useQuery } from 'react-query'
import HeatmapTooltip from '@components/HeatmapTooltip/HeatmapTooltip'
import { Loader } from '@components/UI'
import { currentYear } from '@utils/convertDates'
import { recordsValues } from '@utils/recordsValues'
import { RecordsSevice } from '@services/records'
import styles from './Calendar.module.scss'
import { configuration } from './calendar.data'

const Calendar: FC = () => {
	const { data, isFetched } = useQuery('records', () =>
		RecordsSevice.fetchAllRecords(),
	)
	return (
		<section className={styles.calendar}>
			{isFetched ? (
				<ResponsiveCalendar
					from={`${currentYear}-01-01`}
					to={`${currentYear}-12-31`}
					data={recordsValues(data?.data ?? [])}
					tooltip={HeatmapTooltip}
					{...configuration}
				/>
			) : (
				<Loader centered />
			)}
		</section>
	)
}

export default Calendar
