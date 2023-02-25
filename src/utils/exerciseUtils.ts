export const getWeights = (
	number: number | undefined,
	units: string | undefined,
) => {
	if (number != undefined) {
		return `${number} ${units}`
	}
	return 0
}
