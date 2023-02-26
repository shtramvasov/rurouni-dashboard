import { useQuery } from 'react-query'
import { ExercisesService } from '@services/exercises'

export const useExercises = () => {
	return useQuery('exercises', () => ExercisesService.fetchAllExercises())
}
