import { FC } from 'react'
import styles from './UserCard.module.scss'
import { IUser } from '@/types/user.interface'
import { Avatar, Button, Card, Typography } from 'antd'
import { useRouter } from 'next/router'

const UserCard: FC<{ user: IUser }> = ({ user }) => {
	const { push } = useRouter()

	return (
		<Card className={styles.card}>
			<Avatar src={user.avatarPath} alt={user.name} />
			<Typography.Text>
				<b>user.name</b>
			</Typography.Text>
			<Button type="dashed" onClick={() => push(`/profile/${user._id}`)}>
				Перейти у профіль
			</Button>
		</Card>
	)
}

export default UserCard
