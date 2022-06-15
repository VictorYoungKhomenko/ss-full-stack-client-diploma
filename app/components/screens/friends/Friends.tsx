import { FC } from 'react'
import Layout from '@/components/layout/Layout'
import { useProfile } from '@/hooks/useProfile'
import UserCard from '@/components/ui/user-card/UserCard'
import { Card, Skeleton, Typography } from 'antd'

const Friends: FC = () => {
	const { isLoading, data } = useProfile()

	return (
		<Layout title='Друзі'>
			<Card bordered={false} bodyStyle={{ padding: '30px 0' }}>
				<Typography.Title level={1} style={{ textAlign: 'center' }}>
					Мої друзі
				</Typography.Title>

				{
					isLoading ?
						(<Skeleton />) : data?.friends?.length ?
							(data.friends?.map(user => <UserCard user={user} key={user._id} />))
							: <div>Друзів не має</div>
				}
			</Card>
		</Layout>
	)
}

export default Friends
