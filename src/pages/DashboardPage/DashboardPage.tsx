import { FC } from 'react'
import Layout from '@components/Layout/Layout'
import { Heading } from '@components/UI'
import styles from './DashboardPage.module.scss'

const DashboardPage: FC = () => {
	return (
		<Layout>
			<section className={styles.dashboardPage}>
				<Heading size='leading' >Заголовок</Heading>
				<Heading>Заголовок</Heading>
				<Heading size='small'>Заголовок</Heading>
			</section>
		</Layout>
	)
}

export default DashboardPage
