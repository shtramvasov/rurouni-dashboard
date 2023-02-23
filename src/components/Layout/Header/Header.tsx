import { FC } from 'react'
import { HiOutlinePlus } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import Navigation from '@components/Layout/Navigation/Navigation'
import { NavigationData as links } from '@components/Layout/Navigation/navigation.data'
import Logo from '@components/Logo/Logo'
import { Button } from '@components/UI'
import styles from './Header.module.scss'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Navigation links={links} />
			<NavLink className='w-full sm:w-auto' to='/auth'>
				<Button blue responsive>
					<HiOutlinePlus /> Записать тренировку
				</Button>
			</NavLink>
		</header>
	)
}

export default Header
