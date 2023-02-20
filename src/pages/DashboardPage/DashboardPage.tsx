import { FC } from 'react'
import Layout from '@components/Layout/Layout'
import styles from './DashboardPage.module.scss'

const DashboardPage: FC = () => {
	return (
		<Layout>
			<div className={styles.dashboardPage}>DashboardPage</div>
		</Layout>
	)
}

export default DashboardPage
