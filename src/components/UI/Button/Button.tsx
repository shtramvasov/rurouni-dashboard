import classnames from 'classnames'
import { FC, PropsWithChildren } from 'react'
import Loader from '@components/UI/Loader/Loader'
import { IButton } from './Button.interface'
import styles from './Button.module.scss'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	green,
	blue,
	circle,
	large,
	wide,
	responsive,
	loading,
	...rest
}) => {
	return (
		<button
			disabled={loading}
			className={classnames(styles.button, className, {
				[styles.green]: green,
				[styles.blue]: blue,
				[styles.circle]: circle,
				[styles.large]: large,
				[styles.wide]: wide,
				[styles.responsive]: responsive,
			})}
			{...rest}
		>
			{loading && <Loader className={styles.loader} centered small white />}
			<span
				className={classnames(styles.children, {
					[styles.children__hidden]: loading,
				})}
			>
				{children}
			</span>
		</button>
	)
}

export default Button
