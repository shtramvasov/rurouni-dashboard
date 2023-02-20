import { FC } from 'react'
import Navigation from '@components/Layout/Navigation/Navigation'
import Logo from '@components/Logo/Logo'
import styles from './Header.module.scss'
import { NavigationData as links } from '@components/Layout/Navigation/navigation.data'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Navigation links={links}/>
		</header>
	)
}

export default Header
