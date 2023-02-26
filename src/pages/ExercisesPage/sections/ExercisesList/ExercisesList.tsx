import { FC } from 'react'
import { useQuery } from 'react-query'
import { Loader } from '@components/UI'
import { ExercisesService } from '@services/exercises'
import styles from './ExercisesList.module.scss'

const ExercisesList: FC = () => {
	const { data, isFetched } = useQuery('exercises', () =>
		ExercisesService.fetchAllExercises(),
	)
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
