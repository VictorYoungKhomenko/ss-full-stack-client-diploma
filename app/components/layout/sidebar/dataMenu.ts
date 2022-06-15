import { IMenuItem } from '@/types/menu.interface'
import {
	FileTextOutlined,
	HomeOutlined,
	ProfileOutlined
} from '@ant-design/icons'

export const menu: IMenuItem[] = [
	{
		title: 'Моя сторінка',
		link: '/profile',
		icon: HomeOutlined
	},
	{
		title: 'Друзі',
		link: '/friends',
		icon: ProfileOutlined
	},
	{
		title: 'Новини',
		link: '/',
		icon: FileTextOutlined
	}
]
