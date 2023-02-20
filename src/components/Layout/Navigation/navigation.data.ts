import { AiOutlineUser } from 'react-icons/ai'
import { CiCircleList } from 'react-icons/ci'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { INavigation } from './navigation.interface'

export const NavigationData: INavigation[] = [
	{
		title: 'Главная',
		link: '/',
		icon: AiOutlineUser,
	},
	{
		title: 'Упражнения',
		link: '/exercises',
		icon: CiCircleList,
	},
	{
		title: 'Календарь тренировок',
		link: '/calendar',
		icon: HiOutlineClipboardList,
	},
]
