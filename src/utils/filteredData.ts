export const filteredData = (array: Array<any>, filter: string) => {
	return array.filter(item =>
		item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
	)
}
