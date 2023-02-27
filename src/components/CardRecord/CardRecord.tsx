import { FC } from 'react'
import { Heading } from '@components/UI'
import { IRecordExercise } from '@interfaces/IRecord'
import styles from './CardRecord.module.scss'

interface IProps {
	item: IRecordExercise
	order: number
}

const CardRecord: FC<IProps> = ({ item, order }) => {
	return (
		<div className={styles.cardRecord}>
			<Heading bold size='small'>
				<b className={styles.order}>{order}.</b> {item.name}
			</Heading>
			<div className={styles.description}>
				<p className={styles.weight}>
					{item.weight}
					{item.units}
				</p>
				<p>
					{item.reps} x {item.sets}
				</p>
			</div>
		</div>
	)
}

export default CardRecord
