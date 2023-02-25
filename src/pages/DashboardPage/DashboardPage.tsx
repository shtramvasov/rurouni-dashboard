import { FC } from 'react'
import Layout from '@components/Layout/Layout'
import styles from './DashboardPage.module.scss'
import { Calendar, Statistics } from './sections'

const DashboardPage: FC = () => {
	return (
		<Layout>
			<section className={styles.dashboardPage}>
				<Statistics />
				<Calendar />
			</section>
		</Layout>
	)
}

export default DashboardPage
