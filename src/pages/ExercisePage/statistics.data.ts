import { getWeights } from '@utils/exerciseUtils'
import { IExercise } from '@interfaces/IExercise'
import { countWorkouts } from './../../utils/exerciseUtils'
import calories from '@assets/images/calories.png'
import notification from '@assets/images/notification.png'
import record from '@assets/images/record.png'
import weights from '@assets/images/weights.png'

export const getExercisesData = (exercise: IExercise | undefined) => [
	{
		image: weights,
		title: 'Текущий вес',
		value: getWeights(exercise?.weight, exercise?.units),
	},
	{
		image: record,
		title: 'Личный рекорд',
		value: getWeights(exercise?.personalMax, exercise?.units),
	},
	{
		image: notification,
		title: 'Всего тренировок',
		value: countWorkouts(exercise?.history),
	},
	{
		image: calories,
		title: 'Калорий сгорело',
		value: exercise?.totalCalories ?? 0,
	},
]
