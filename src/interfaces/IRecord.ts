interface IExercise {
  id: string
  name: string
  weight: number
  units: string
  reps: number
  sets: number
}

export interface IRecord {
  uid: string
  name: string
  date: any //#TODO Timestamp?
  category: number
  exercises: IExercise[]
  calories: number
}