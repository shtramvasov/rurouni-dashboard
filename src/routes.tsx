import { createBrowserRouter, redirect } from 'react-router-dom'
import CalendarPage from '@pages/CalendarPage/CalendarPage'
import DashboardPage from '@pages/DashboardPage/DashboardPage'
import ExercisePage from '@pages/ExercisePage/ExercisePage'
import ExercisesPage from '@pages/ExercisesPage/ExercisesPage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <DashboardPage />,
	},
	{
		path: '/exercises',
		element: <ExercisesPage />,
	},
	{
		path: '/exercises/:id',
		element: <ExercisePage />,
	},
	{
		path: '/calendar',
		element: <CalendarPage />,
	},
	{
		path: '/*',
		element: <DashboardPage />,
		loader: () => redirect('/'),
	},
])
