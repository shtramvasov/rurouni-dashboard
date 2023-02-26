import { FC } from 'react'
import { HiChevronRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { Heading } from '@components/UI'
import { IExercise } from '@interfaces/IExercise'
import styles from './CardExercise.module.scss'

interface IProps {
	data: IExercise
}

const CardExercise: FC<IProps> = ({ data }) => {
	return (
		<Link to={data.id} className={styles.cardExercise}>
			<Heading size='small' bold centered>
				{data.name}
			</Heading>
			<span>
				Упражнение на <HiChevronRight className={styles.icon} />{' '}
				<b>{data.tag}</b>
			</span>
		</Link>
	)
}

export default CardExercise
