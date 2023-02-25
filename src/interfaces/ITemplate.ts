interface IExercise {
	id: string
	name: string
}

export interface ITemplate {
	id: string
	name: string
	exercises: IExercise
}
