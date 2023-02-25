import { FC } from 'react'
import { useQuery } from 'react-query'
import { Heading } from '@components/UI'
import { TemplatesSevice } from '@services/templates'
import styles from './WorkoutPlan.module.scss'

const WorkoutPlan: FC = () => {
	const { data, isFetched } = useQuery('templates', () =>
		TemplatesSevice.fetchAllTemplates(),
	)
	console.log(data)

	return (
		<section className={styles.workoutPlan}>
			<Heading className='text-black-light' size='small' uppercase>
				Программа тренировок
			</Heading>
		</section>
	)
}

export default WorkoutPlan
