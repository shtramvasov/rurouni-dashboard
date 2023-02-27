import { FC } from 'react'
import Layout from '@components/Layout/Layout'
import { Heading } from '@components/UI'
import styles from './AuthPage.module.scss'
import { AuthForm } from './sections'

const AuthPage: FC = () => {
	return (
		<Layout>
			<div className={styles.authPage}>
				<Heading centered bold>
					Код для авторизации
				</Heading>
				<AuthForm />
			</div>
		</Layout>
	)
}

export default AuthPage
