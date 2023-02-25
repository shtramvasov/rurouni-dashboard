import { collection, getDocs } from 'firebase/firestore'
import { ITemplate } from '@interfaces/ITemplate'
import { database } from './firebase'

const templatesdb = collection(database, 'templates')

export const TemplatesSevice = {
	async fetchAllTemplates(): Promise<{ data: ITemplate[] }> {
		const querySnapshot = await getDocs(templatesdb)
		const templates: ITemplate[] = []
		querySnapshot?.forEach(doc => {
			templates.push({ id: doc.id, ...doc.data() } as ITemplate)
		})
		return {
			data: templates,
		}
	},
}
