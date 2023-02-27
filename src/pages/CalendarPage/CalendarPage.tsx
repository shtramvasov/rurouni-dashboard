import { FC } from 'react'
import Layout from '@components/Layout/Layout'
import { RecordsList } from './sections'

const CalendarPage: FC = () => {
	return (
		<Layout>
			<RecordsList />
		</Layout>
	)
}

export default CalendarPage
