import { BasicTooltip } from '@nivo/tooltip'
import { FC } from 'react'
import { localeDate } from '@utils/convertDates'

const HeatmapTooltip: FC = (data: any) => {
	return (
		<BasicTooltip
			id={`${localeDate(data.data.day)}`}
			value={`${data.data.name}, Калорий сгорело: ${data.data.calories}`}
			color={data.color}
			enableChip
		/>
	)
}

export default HeatmapTooltip
