import classnames from 'classnames'
import { FC, PropsWithChildren } from 'react'
import { IHeading } from './Heading.interface'
import styles from './Heading.module.scss'

const Heading: FC<PropsWithChildren<IHeading>> = ({
	children,
	size,
	className,
	uppercase,
	centered,
	bold,
}) => {
	const Heading = size === 'leading' ? 'h1' : size === 'small' ? 'h3' : 'h2'
	return (
		<Heading
			className={classnames(styles.heading, className, {
				[styles.uppercase]: uppercase,
				[styles.centered]: centered,
				[styles.bold]: bold,
			})}
		>
			{children}
		</Heading>
	)
}

export default Heading
