import { FC } from 'react'
import { useQuery } from 'react-query'
import Layout from '@components/Layout/Layout'
import { ExercisesSevice } from '@services/exercises'

const ExercisesPage: FC = () => {
	const { data } = useQuery('exercises', () =>
		ExercisesSevice.fetchAllExercises(),
	)
	console.log(data)
	return <Layout>ExercisesPage</Layout>
}

export default ExercisesPage
