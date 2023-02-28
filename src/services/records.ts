import { addDoc, collection, getDocs } from 'firebase/firestore'
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
			data: records.sort((a, b) =>
				b.date.toString().localeCompare(a.date.toString()),
			),
		}
	},
	async addRecord(
		data: Omit<IRecord, 'id'>,
	): Promise<{ data: null } | undefined> {
		try {
			await addDoc(recordsdb, {
				...data,
			})
			return { data: null }
		} catch (error: any) {
			console.log(error.message)
		}
	},
}
