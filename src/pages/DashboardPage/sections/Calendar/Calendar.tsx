import { ResponsiveCalendar } from '@nivo/calendar'
import { FC } from 'react'
import HeatmapTooltip from '@components/HeatmapTooltip/HeatmapTooltip'
import { currentYear } from '@utils/convertDates'
import { recordsValues } from '@utils/recordsValues'
import { IRecord } from '@interfaces/IRecord'
import styles from './Calendar.module.scss'
import { configuration } from './calendar.data'

interface ICalendar {
	data?: {
		data: IRecord[]
	}
}

const Calendar: FC<ICalendar> = ({ data }) => {
	return (
		<section className={styles.calendar}>
			<ResponsiveCalendar
				from={`${currentYear}-01-01`}
				to={`${currentYear}-12-31`}
				data={recordsValues(data?.data ?? [])}
				tooltip={HeatmapTooltip}
				{...configuration}
			/>
		</section>
	)
}

export default Calendar
