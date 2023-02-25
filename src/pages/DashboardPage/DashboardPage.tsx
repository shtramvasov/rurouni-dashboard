import { FC } from 'react'
import { useQuery } from 'react-query'
import Layout from '@components/Layout/Layout'
import Statistics from '@components/Statistics/Statistics'
import { Loader } from '@components/UI'
import { RecordsService } from '@services/records'
import { Calendar, WorkoutPlan } from './sections'
import { getData } from './statistics.data'

const DashboardPage: FC = () => {
	const { data: records, isFetched } = useQuery('records', () =>
		RecordsService.fetchAllRecords(),
	)

	const data = getData(records?.data)
	return (
		<Layout>
			<Statistics data={data} title='Информация о тренировках' />
			{isFetched ? <Calendar data={records} /> : <Loader centered />}
			<WorkoutPlan />
		</Layout>
	)
}

export default DashboardPage
