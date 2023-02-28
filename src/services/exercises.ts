import { collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { IExercise } from '@interfaces/IExercise'
import { database } from './firebase'

const exercisesdb = collection(database, 'exercises')

export const ExercisesService = {
	async fetchAllExercises(): Promise<{ data: IExercise[] }> {
		const querySnapshot = await getDocs(exercisesdb)
		const exercises: IExercise[] = []
		querySnapshot?.forEach(doc => {
			exercises.push({ id: doc.id, ...doc.data() } as IExercise)
		})
		return {
			data: exercises,
		}
	},
	async fetchExerciseById(id: string): Promise<{ data: IExercise }> {
		const exerciseRef = doc(database, 'exercises', id)
		const responce = await getDoc(exerciseRef)
		return { data: responce.data() as IExercise }
	},
	async updateExercise(
		exerciseId: string,
		data: Partial<IExercise>,
	): Promise<{ data: null } | undefined> {
		try {
			const exerciseId = doc(exercisesdb, data.id)
			await updateDoc(exerciseId, data)
			return { data: null }
		} catch (error: any) {
			console.log(error.message)
		}
	},
}
