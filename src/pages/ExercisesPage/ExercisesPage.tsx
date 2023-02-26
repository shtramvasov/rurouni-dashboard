import { FC, useState } from 'react'
import Layout from '@components/Layout/Layout'
import Search from '@components/Search/Search'
import { ExercisesList } from './sections'

const ExercisesPage: FC = () => {
	const [result, setResult] = useState('')

	return (
		<Layout>
			<Search title='Список всех упражнений' search={setResult} />
			<ExercisesList filter={result} />
		</Layout>
	)
}

export default ExercisesPage
