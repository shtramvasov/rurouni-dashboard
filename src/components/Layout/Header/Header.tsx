import { FC } from 'react'
import { HiViewGridAdd } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import Navigation from '@components/Layout/Navigation/Navigation'
import { NavigationData as links } from '@components/Layout/Navigation/navigation.data'
import Logo from '@components/Logo/Logo'
import { Button } from '@components/UI'
import { useAuth } from '@hooks/useAuth'
import styles from './Header.module.scss'

const Header: FC = () => {
	const isAuth = useAuth()
	return (
		<header className={styles.header}>
			<Logo />
			<Navigation links={links} />
			<NavLink className='responsive' to={isAuth ? '/admin' : '/auth'}>
				<Button blue responsive>
					<HiViewGridAdd /> Записать тренировку
				</Button>
			</NavLink>
		</header>
	)
}

export default Header
