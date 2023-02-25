import { FC } from 'react'
import { useQuery } from 'react-query'
import CardTemplate from '@components/CardTemplate/CardTemplate'
import { Heading } from '@components/UI'
import { TemplatesSevice } from '@services/templates'
import styles from './WorkoutPlan.module.scss'

const WorkoutPlan: FC = () => {
	const { data } = useQuery('templates', () =>
		TemplatesSevice.fetchAllTemplates(),
	)

	return (
		<section className={styles.workoutPlan}>
			<Heading className='text-black-light' size='small' uppercase>
				Программа тренировок
			</Heading>
			<section className={styles.container}>
				{data?.data.map(item => (
					<CardTemplate key={item.id} data={item} />
				))}
				{data?.data.map(item => (
					<CardTemplate key={item.id} data={item} />
				))}
				{data?.data.map(item => (
					<CardTemplate key={item.id} data={item} />
				))}
			</section>
		</section>
	)
}

export default WorkoutPlan
