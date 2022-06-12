import { FC } from 'react'
import { useRouter } from 'next/router'
import { Card, List, Skeleton } from 'antd'
import { useProfile } from '@/hooks/useProfile'
import UserItem from '@/components/layout/sidebar/UserItems/UserItem'

const UserItems: FC = () => {
	const { push } = useRouter()

	const { isLoading, data } = useProfile()

	return (
		<Card
			style={{
				padding: 2,
				backgroundColor: '#F1F7FA',
				border: 'none',
				borderRadius: 3
			}}
		>
			{isLoading ? <Skeleton /> : data?.friends?.length ? data?.friends?.map(user => (
				<UserItem key={user._id} user={user} />
			)) : <div> Друзів не має</div>}

			<List>
				<List.Item onClick={() => push('/conversations')} style={{ cursor: 'pointer' }}>
					<List.Item.Meta title='Сообщения' />
				</List.Item>
			</List>
		</Card>
	)
}

export default UserItems
