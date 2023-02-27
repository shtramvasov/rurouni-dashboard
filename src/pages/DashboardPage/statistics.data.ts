import {
	reduceTrainings,
	recordsProgress,
	countTotalCalories,
} from '@utils/recordsUtils'
import { IRecord } from '@interfaces/IRecord'
import calendar from '@assets/images/calendar.png'
import calories from '@assets/images/calories.png'
import cardio from '@assets/images/cardio.png'
import weights from '@assets/images/weights.png'

export const getRecordsData = (records: IRecord[] | undefined) => [
	{
		image: weights,
		title: 'Силовых тренировок',
		value: reduceTrainings(records, 1),
	},
	{
		image: cardio,
		title: 'Кардио тренировок',
		value: reduceTrainings(records, 2),
	},
	{
		image: calendar,
		title: 'Общий прогресс',
		value: recordsProgress(records),
	},
	{
		image: calories,
		title: 'Всего калорий сгорело',
		value: countTotalCalories(records),
	},
]
