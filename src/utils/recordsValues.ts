import { IRecord } from '@interfaces/IRecord'
import { timestampToDate } from './convertDates'

export const recordsValues = (records: IRecord[]) => {
	return records.map(record => {
		return {
			day: timestampToDate(record.date),
			value: record.category,
			name: record.name,
			calories: record.calories,
		}
	})
}
