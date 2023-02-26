import { FC } from 'react'
import CardTemplate from '@components/CardTemplate/CardTemplate'
import { Heading } from '@components/UI'
import { useTemplates } from '@hooks/useTemplates'
import styles from './WorkoutPlan.module.scss'

const WorkoutPlan: FC = () => {
	const { data } = useTemplates()
	return (
		<section className={styles.workoutPlan}>
			<Heading className='text-black-light' size='small' uppercase>
				Программа тренировок
			</Heading>
			<section className={styles.container}>
				{data?.data.map(item => (
					<CardTemplate key={item.id} data={item} />
				))}
			</section>
		</section>
	)
}

export default WorkoutPlan
