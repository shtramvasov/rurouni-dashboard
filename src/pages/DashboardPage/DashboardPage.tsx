import { FC } from 'react'
import Layout from '@components/Layout/Layout'
import styles from './DashboardPage.module.scss'
import { CalendarHeatmap } from './sections'

const DashboardPage: FC = () => {
	return (
		<Layout>
			<section className={styles.dashboardPage}>
				<CalendarHeatmap />
			</section>
		</Layout>
	)
}

export default DashboardPage
