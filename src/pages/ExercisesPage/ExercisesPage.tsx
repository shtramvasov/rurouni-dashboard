import { FC } from 'react'
import Layout from '@components/Layout/Layout'
import { ExercisesList } from './sections'

const ExercisesPage: FC = () => {
	return (
		<Layout>
			<ExercisesList />
		</Layout>
	)
}

export default ExercisesPage
