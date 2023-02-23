import classnames from 'classnames'
import { FC, PropsWithChildren } from 'react'
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
	...rest
}) => {
	return (
		<button
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
			{children}
		</button>
	)
}

export default Button
