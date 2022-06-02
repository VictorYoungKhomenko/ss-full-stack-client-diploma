import { FC } from 'react'
import { useRouter } from 'next/router'
import { Card, List } from 'antd'
import { users } from '@/components/layout/sidebar/dataUsers'
import UserItem from '@/components/layout/sidebar/UserItems/UserItem'

const UserItems: FC = () => {
	const { push } = useRouter()

	return (
		<Card
			style={{
				padding: 2,
				backgroundColor: '#F1F7FA',
				border: 'none',
				borderRadius: 3
			}}
		>
			{users.map(user => (
				<UserItem key={user._id} user={user} />
			))}

			<List>
				<List.Item onClick={() => push('/conversations')}>
					<List.Item.Meta title="Сообщения" />
				</List.Item>
			</List>
		</Card>
	)
}

export default UserItems
