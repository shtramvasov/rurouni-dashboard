import { FC } from 'react'
import styles from './CardStat.module.scss'

interface IProps {
	title: string
	image: string
	value: string | number
}

const CardStat: FC<IProps> = ({ image, title, value }) => {
	return (
		<div className={styles.cardStat}>
			<img src={image} alt={title} className={styles.image}/>
			<div className={styles.description}>
				<p>{title}</p>
				<span>{value}</span>
			</div>
		</div>
	)
}

export default CardStat
