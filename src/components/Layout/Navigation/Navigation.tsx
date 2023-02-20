import { FC } from 'react'
import NavigationLink from '@components/Layout/NavigationLink/NavigationLink'
import styles from './Navigation.module.scss'
import { INavigation } from './navigation.interface'

interface IProps {
	links: INavigation[]
}

const Navigation: FC<IProps> = ({ links }) => {
	return (
		<nav className={styles.navigation}>
			{links.map(link => (
				<NavigationLink item={link} key={link.link} />
			))}
		</nav>
	)
}

export default Navigation
