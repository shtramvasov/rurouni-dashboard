import { useQuery } from 'react-query'
import { RecordsService } from '@services/records'

export const useRecords = () => {
	return useQuery('records', () => RecordsService.fetchAllRecords())
}
