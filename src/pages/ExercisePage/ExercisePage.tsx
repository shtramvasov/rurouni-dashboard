import { FC } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Layout from '@components/Layout/Layout'
import { ExercisesSevice } from '@services/exercises'

const ExercisePage: FC = () => {
	const { id } = useParams()
	const { data } = useQuery('exercises', () =>
		ExercisesSevice.fetchExerciseById(id),
	)
  console.log(data)
	return <Layout>ExercisePage</Layout>
}

export default ExercisePage
