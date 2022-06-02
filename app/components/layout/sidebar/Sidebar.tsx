import { FC } from 'react'
import Menu from '@/components/layout/sidebar/Menu'
import User from '@/components/layout/sidebar/User'
import UserItems from '@/components/layout/sidebar/UserItems/UserItems'

const Sidebar: FC = () => {
	return (
		<div>
			<User />
			<UserItems />
			<Menu />
		</div>
	)
}

export default Sidebar
