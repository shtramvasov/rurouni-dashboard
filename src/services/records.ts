import { collection, getDocs } from 'firebase/firestore'
import { IRecord } from '@interfaces/IRecord'
import { database } from './firebase'

const recordsdb = collection(database, 'records')

export const RecordsService = {
	async fetchAllRecords(): Promise<{ data: IRecord[] }> {
		const querySnapshot = await getDocs(recordsdb)
		const records: IRecord[] = []
		querySnapshot?.forEach(doc => {
			records.push({ id: doc.id, ...doc.data() } as IRecord)
		})
		return {
			data: records,
		}
	},
}
