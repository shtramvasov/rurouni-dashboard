import { IRecord } from '@interfaces/IRecord'

export const reduceTrainings = (
	array: Array<any> | undefined,
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
