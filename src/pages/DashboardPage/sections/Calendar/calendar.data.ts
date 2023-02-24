const russianMonths = [
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

const theme = {
	fontSize: 16,
	fontFamily: 'Gilroy',
	textColor: '#10192B',
}

export const configuration = {
	// styles
	theme: theme,
	pixelRatio: 20,
	colors: ['#ECEEF9', '#3AA543', '#9CDDA2'],
	emptyColor: '#e9ebf4',
	margin: { left: 25, top: 25 },
	// days
	dayBorderWidth: 0,
	daySpacing: 6,
	// months
	monthLabels: russianMonths,
	monthLegend: (year: number, month: number) => russianMonths[month],
	monthBorderColor: 'rgba(0,0,0,0.0)',
	monthLegendOffset: 16,
	// years
	yearLegend: () => '',
}
