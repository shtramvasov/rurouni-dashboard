import { FC } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Layout from '@components/Layout/Layout'
import Statistics from '@components/Statistics/Statistics'
import { ExercisesService } from '@services/exercises'
import { getExercisesData } from './statistics.data'

const ExercisePage: FC = () => {
	const { id } = useParams()
	const { data: exercise } = useQuery('exercises', () =>
		ExercisesService.fetchExerciseById(id as string),
	)
	const data = getExercisesData(exercise?.data)

	return (
		<Layout>
			<Statistics data={data} />
		</Layout>
	)
}

export default ExercisePage
