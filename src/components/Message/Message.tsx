import { FC } from 'react'
import { Heading } from '@components/UI'
import styles from './Message.module.scss'
import cup from '@assets/images/cup.png'

interface IProps {
	message: string
}

const Message: FC<IProps> = ({ message }) => {
	return (
		<div className={styles.message}>
			<img className={styles.image} src={cup} alt='Error' />
			<Heading bold centered size='small'>
				{message}
			</Heading>
		</div>
	)
}

export default Message
