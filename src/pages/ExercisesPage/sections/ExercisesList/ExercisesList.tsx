import { FC } from 'react'
import CardExercise from '@components/CardExercise/CardExercise'
import { Loader } from '@components/UI'
import { filterArray } from '@utils/filterArray'
import { useExercises } from '@hooks/useExercises'
import styles from './ExercisesList.module.scss'

interface IProps {
	filter: string
}

const ExercisesList: FC<IProps> = ({ filter }) => {
	const { data, isFetched } = useExercises()
	const filteredData = filterArray(data?.data, filter)

	return (
		<section className={styles.exercisesList}>
			{isFetched ? (
				filteredData.map(exercise => (
					<CardExercise key={exercise.id} data={exercise} />
				))
			) : (
				<Loader centered />
			)}
		</section>
	)
}

export default ExercisesList
