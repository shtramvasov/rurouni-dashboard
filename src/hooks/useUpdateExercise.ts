import { useQueryClient, useMutation } from 'react-query'
import { ExercisesService } from '@services/exercises'
import { IExercise } from '@interfaces/IExercise'

// export const useAddExercise = () => {
// 	const queryClient = useQueryClient()

// 	return useMutation({
// 		mutationFn: ExercisesService.updateExercise,
// 		onSuccess: () => {
// 			queryClient.invalidateQueries({ queryKey: ['exercises'] })
// 		},
// 	})
// }

export const useUpdateExercise = () => {
	const queryClient = useQueryClient()

	return useMutation(
		(exercise: IExercise) =>
			ExercisesService.updateExercise(exercise.id, {...exercise}),
		{
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey: ['exercises'] })
			},
		},
	)
}
