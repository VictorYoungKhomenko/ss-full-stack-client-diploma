import { FC } from 'react'
import { useRouter } from 'next/router'
import { Card, List, Skeleton } from 'antd'
import { useProfile } from '@/hooks/useProfile'
import UserItem from '@/components/layout/sidebar/UserItems/UserItem'
import styles from '../Sidebar.module.scss'
import ListItem from '@/components/layout/sidebar/ListItem'
import { MessageOutlined } from '@ant-design/icons'

const UserItems: FC = () => {
	const { push } = useRouter()

	const { isLoading, data } = useProfile()

	return (
		<Card className={styles.card}>
			{isLoading ? <Skeleton /> : data?.friends?.length ? data?.friends?.map(user => (
				<UserItem key={user._id} user={user} />
			)) : <div> Друзів не має</div>}

			<List>
				<ListItem item={{
					title: 'Повідомлення',
					icon: MessageOutlined,
					link: '/conversations'
				}} />
			</List>
		</Card>
	)
}

export default UserItems
