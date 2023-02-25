import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Heading } from '@components/UI'
import { ITemplate } from '@interfaces/ITemplate'
import styles from './CardTemplate.module.scss'

interface IProps {
	data: ITemplate
}

const CardTemplate: FC<IProps> = ({ data }) => {
	return (
		<div className={styles.cardTemplate}>
			<Heading size='small' bold>
				{data.name}
			</Heading>
			<ul className={styles.list}>
				{data.exercises.map(exercise => (
					<Link key={exercise.id} to={`/exercises/${exercise.id}`}>
						<li>{exercise.name}</li>
					</Link>
				))}
			</ul>
		</div>
	)
}

export default CardTemplate
