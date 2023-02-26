import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '@components/Layout/Layout'
import { useAuth } from '@hooks/useAuth'
import styles from './AdminPage.module.scss'

const AdminPage: FC = () => {
	const navigate = useNavigate()
	const isAuth = useAuth()
	useEffect(() => {
		!isAuth && navigate('/')
	}, [navigate])

	return (
		<Layout>
			<div className={styles.adminPage}>AdminPage</div>
		</Layout>
	)
}

export default AdminPage
