import { FC } from 'react'
import Layout from '@components/Layout/Layout'
import Statistics from '@components/Statistics/Statistics'
import { Loader } from '@components/UI'
import { useRecords } from '@hooks/useRecords'
import { Calendar, WorkoutPlan } from './sections'
import { getRecordsData } from './statistics.data'

const DashboardPage: FC = () => {
	const { data: records, isFetched } = useRecords()

	const data = getRecordsData(records?.data)
	return (
		<Layout>
			<Statistics data={data} title='Информация о тренировках' />
			{isFetched ? <Calendar data={records} /> : <Loader centered />}
			<WorkoutPlan />
		</Layout>
	)
}

export default DashboardPage
