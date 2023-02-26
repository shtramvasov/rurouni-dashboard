export interface IHistory {
  date: any
  weight: number
}

export interface IExercise {
	id: string
	name: string
	weight: number
	personalMax: number
	tag: string
	units: 'кг' | 'б'
	history: IHistory[]
	caloriesPerRep: number
	totalCalories: number
}
