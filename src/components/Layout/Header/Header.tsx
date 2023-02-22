import { FC } from 'react'
import Navigation from '@components/Layout/Navigation/Navigation'
import { NavigationData as links } from '@components/Layout/Navigation/navigation.data'
import Logo from '@components/Logo/Logo'
import styles from './Header.module.scss'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Navigation links={links} />
			<Logo />
		</header>
	)
}

export default Header
