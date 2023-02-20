import classnames from 'classnames'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { INavigation } from '@components/Layout/Navigation/navigation.interface'
import styles from './NavigationLink.module.scss'

const NavigationLink: FC<{ item: INavigation }> = ({ item }) => {
	return (
		<NavLink
			to={item.link}
			className={({ isActive }) =>
				classnames(styles.link, { active: isActive })
			}
		>
			{item.title}
		</NavLink>
	)
}

export default NavigationLink
