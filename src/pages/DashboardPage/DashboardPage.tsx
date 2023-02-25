import { FC } from 'react'
import { useQuery } from 'react-query'
import Layout from '@components/Layout/Layout'
import Statistics from '@components/Statistics/Statistics'
import { Loader } from '@components/UI'
import { RecordsSevice } from '@services/records'
import styles from './DashboardPage.module.scss'
import { Calendar } from './sections'
import { getData } from './statistics.data'

const DashboardPage: FC = () => {
	const { data: records, isFetched } = useQuery('records', () =>
		RecordsSevice.fetchAllRecords(),
	)

	const data = getData(records?.data)
	return (
		<Layout>
			<section className={styles.dashboardPage}>
				<Statistics data={data} />
				{isFetched ? <Calendar data={records} /> : <Loader centered />}
			</section>
		</Layout>
	)
}

export default DashboardPage
