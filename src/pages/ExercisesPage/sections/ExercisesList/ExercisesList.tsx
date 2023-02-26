import { FC } from 'react'
import { Loader } from '@components/UI'
import { useExercises } from '@hooks/useExercises'
import styles from './ExercisesList.module.scss'

const ExercisesList: FC = () => {
	const { data, isFetched } = useExercises()
	return (
		<section className={styles.exercisesList}>
			{isFetched ? (
				data?.data.map(item => <p key={item.id}>{item.name}</p>)
			) : (
				<Loader centered />
			)}
		</section>
	)
}

export default ExercisesList
