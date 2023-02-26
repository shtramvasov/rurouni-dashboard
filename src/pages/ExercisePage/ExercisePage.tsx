import { FC } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '@components/Layout/Layout'
import Statistics from '@components/Statistics/Statistics'
import { useExerciseById } from '@hooks/useExercises'
import { getExercisesData } from './statistics.data'

const ExercisePage: FC = () => {
	const { id } = useParams()
	const { data: exercise } = useExerciseById(id as string)
	const data = getExercisesData(exercise?.data)

	return (
		<Layout>
			<Statistics data={data} />
		</Layout>
	)
}

export default ExercisePage
