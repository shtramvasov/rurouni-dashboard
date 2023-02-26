import { useQuery } from 'react-query'
import { TemplatesService } from '@services/templates'

export const useTemplates = () => {
	return useQuery('templates', () => TemplatesService.fetchAllTemplates())
}
