import classnames from 'classnames'
import { FC, forwardRef } from 'react'
import { IInput } from './Input.interface'
import styles from './Input.module.scss'

const Input: FC<IInput> = forwardRef<HTMLInputElement, IInput>(
	(
		{
			error,
			small,
			responsive,
			outlined,
			secondary,
			type = 'text',
			className,
			...rest
		},
		ref,
	) => {
		return (
			<div
				className={classnames(styles.field, className, {
					[styles.small]: small,
					[styles.responsive]: responsive,
				})}
			>
				<input
					className={classnames(styles.input, {
						[styles.small]: small,
						[styles.responsive]: responsive,
						[styles.outlined]: outlined,
						[styles.secondary]: secondary,
					})}
					ref={ref}
					type={type}
					{...rest}
				/>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	},
)

Input.displayName = 'Input'

export default Input
