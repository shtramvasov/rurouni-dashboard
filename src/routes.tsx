import { createBrowserRouter, redirect } from 'react-router-dom'
import AdminPage from '@pages/AdminPage/AdminPage'
import AuthPage from '@pages/AuthPage/AuthPage'
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
		path: '/auth',
		element: <AuthPage />,
	},
	{
		path: '/admin',
		element: <AdminPage />,
	},
	{
		path: '/*',
		element: <DashboardPage />,
		loader: () => redirect('/'),
	},
])
