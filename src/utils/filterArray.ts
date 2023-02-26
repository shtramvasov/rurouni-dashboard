export const filterArray = (array: Array<any> | undefined, filter: string) => {
	if (array != undefined) {
		return array.filter(
			item =>
				item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
				item.tag?.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
		)
	}
	return []
}
