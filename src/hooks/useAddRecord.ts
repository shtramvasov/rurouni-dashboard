import { useMutation, useQueryClient } from 'react-query'
import { RecordsService } from '@services/records'

export const useAddRecord = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: RecordsService.addRecord,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['records'] })
		},
	})
}
