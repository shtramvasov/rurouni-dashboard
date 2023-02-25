import { FC } from 'react'
import { useQuery } from 'react-query'
import Layout from '@components/Layout/Layout'
import { ExercisesService } from '@services/exercises'
import { getExercisesData } from '@pages/ExercisePage/statistics.data'

const ExercisesPage: FC = () => {
	const { data } = useQuery('exercises', () =>
		ExercisesService.fetchAllExercises(),
	)

	return <Layout>ExercisesPage</Layout>
}

export default ExercisesPage
