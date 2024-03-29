export interface IRecordExercise {
	id: string
	name: string
	weight: number
	units: string
	reps: number
	sets: number
}

export interface IRecord {
	id: string
	name: string
	date: any
	category: number
	exercises: IRecordExercise[]
	calories: number
}
