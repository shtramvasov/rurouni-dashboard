import { IRecord } from '@interfaces/IRecord'

export const reduceTrainings = (
	array: IRecord[] | undefined,
	category: IRecord['category'],
) => {
	if (array != undefined) {
		const result = array.reduce(
			(acc, current) => (current.category === category ? acc + 1 : acc),
			0,
		)
		return result
	}
	return 0
}

export const recordsProgress = (array: IRecord[] | undefined) => {
	if (array != undefined) {
		return Math.ceil((array.length / 313) * 100) + ' %'
	}
	return 0 + ' %'
}

export const countCalories = (array: IRecord[] | undefined) => {
	if (array != undefined) {
		const result = array.reduce((acc, current) => acc + current.calories, 0)
		return result
	}
	return 0
}
