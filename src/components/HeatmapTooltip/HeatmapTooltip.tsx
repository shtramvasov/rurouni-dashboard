import { BasicTooltip } from '@nivo/tooltip'
import { FC } from 'react'

const HeatmapTooltip: FC = data => {
	return (
		<BasicTooltip
			id={data.data.name}
			value={'Калорий сгорело ' + data.data.calories}
			color={data.color}
			enableChip
		/>
	)
}

export default HeatmapTooltip
