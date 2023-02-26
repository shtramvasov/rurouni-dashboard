import { FC } from 'react'
import Layout from '@components/Layout/Layout'
import styles from './AuthPage.module.scss'

const AuthPage: FC = () => {
	return (
		<Layout>
			<div className={styles.authPage}>AuthPage</div>
		</Layout>
	)
}

export default AuthPage
