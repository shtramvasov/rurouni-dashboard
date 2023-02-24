
export const russianMonths = [
	'Янв',
	'Фев',
	'Март',
	'Апр',
	'Май',
	'Июнь',
	'Июль',
	'Авг',
	'Сен',
	'Окт',
	'Ноя',
	'Дек',
]

export const theme = {
	fontSize: 16,
	fontFamily: 'Gilroy',
}

export const configuration = {
	theme: theme,
	monthLegend: (year: number, month: number) => russianMonths[month],
}
