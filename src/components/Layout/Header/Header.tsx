import { FC } from 'react'
import Logo from '@components/Logo/Logo'
import styles from './Header.module.scss'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
		</header>
	)
}

export default Header
