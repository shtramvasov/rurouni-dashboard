import classnames from 'classnames'
import { FC } from 'react'
import { BiLoaderAlt } from 'react-icons/bi'
import styles from './Loader.module.scss'

interface ILoader {
	small?: boolean
	blue?: boolean
	white?: boolean
	centered?: boolean
	className?: string
}

const Loader: FC<ILoader> = ({ small, centered, className, blue, white }) => {
	return (
		<BiLoaderAlt
			className={classnames(styles.loader, className, {
				[styles.small]: small,
				[styles.centered]: centered,
				[styles.blue]: blue,
				[styles.white]: white,
			})}
		/>
	)
}

export default Loader
