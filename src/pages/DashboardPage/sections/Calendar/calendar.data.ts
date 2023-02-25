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
	colors: ['#ECEEF9', '#6bcc74', '#9cdda2'],
	emptyColor: '#f5f7fb',
	margin: { left: 25, top: 25 },
	// days
	dayBorderWidth: 0,
	daySpacing: 4.5,
	// months
	monthLabels: russianMonths,
	monthLegend: (year: number, month: number) => russianMonths[month],
	monthBorderColor: 'rgba(0,0,0,0.0)',
	monthLegendOffset: 16,
	// years
	yearLegend: () => '',
}
