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
			})}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button
