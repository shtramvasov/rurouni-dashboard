import { IExercise } from '@interfaces/IExercise'

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
