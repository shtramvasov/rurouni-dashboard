import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import { Timestamp } from 'firebase/firestore'

export const currentYear = new Date().getFullYear()

export const timestampToDate = (date: Timestamp): string => {
	return dayjs(date?.toDate()).format('YYYY-MM-DD')
}

export const convertDateLocale = (date: Timestamp): string => {
	return dayjs(date?.toDate()).locale('ru').format('D MMMM YYYY')
}
