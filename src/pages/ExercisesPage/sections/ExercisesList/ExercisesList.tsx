import { FC } from 'react'
import CardExercise from '@components/CardExercise/CardExercise'
import { Loader } from '@components/UI'
import { useExercises } from '@hooks/useExercises'
import styles from './ExercisesList.module.scss'

const ExercisesList: FC = () => {
	const { data, isFetched } = useExercises()
	return (
		<section className={styles.exercisesList}>
			{isFetched ? (
				data?.data.map(exercise => (
					<CardExercise key={exercise.id} data={exercise} />
				))
			) : (
				<Loader centered />
			)}
		</section>
	)
}

export default ExercisesList
