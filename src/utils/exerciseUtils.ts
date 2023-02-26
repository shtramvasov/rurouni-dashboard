import { IExercise } from '@interfaces/IExercise'
import { IHistory } from './../interfaces/IExercise'
import { localeDate } from './convertDates'

export const getWeights = (
	number: number | undefined,
	units: string | undefined,
) => {
	if (number != undefined) {
		return `${number} ${units}`
	}
	return 0
}

export const countWorkouts = (array: IExercise['history'] | undefined) => {
	if (array != undefined) {
		return array.length
	}
	return 0
}

export const parseHistory = (array: IHistory[] | undefined) => {
	if (array != undefined) {
		return array.map(item => ({
			weight: item.weight,
			date: localeDate(item.date),
		}))
	}
	return []
}
