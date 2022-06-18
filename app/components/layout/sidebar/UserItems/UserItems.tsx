import { FC } from 'react'
import { useRouter } from 'next/router'
import { Card, Skeleton, Typography } from 'antd'
import { useProfile } from '@/hooks/useProfile'
import UserItem from '@/components/layout/sidebar/UserItems/UserItem'
import styles from '../Sidebar.module.scss'

const UserItems: FC = () => {
	const { push } = useRouter()

	const { isLoading, data } = useProfile()

	return (
		<Card className={styles.card}>
			<Typography.Title level={5} style={{ marginBottom: 15 }}>
				Мої друзі
			</Typography.Title>
			{isLoading ? <Skeleton /> : data?.friends?.length ? data?.friends?.map(user => (
				<UserItem key={user._id} user={user} />
			)) : <div> Друзів не має</div>}
		</Card>
	)
}

export default UserItems
