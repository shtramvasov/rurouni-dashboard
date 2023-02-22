import { AiOutlineUser, AiOutlineUnorderedList } from 'react-icons/ai'
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
		icon: AiOutlineUnorderedList,
	},
	{
		title: 'Календарь',
		link: '/calendar',
		icon: HiOutlineClipboardList,
	},
]
