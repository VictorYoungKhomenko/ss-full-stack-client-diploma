import { FC } from 'react'
import styles from './UserCard.module.scss'
import { IUser } from '@/types/user.interface'
import { Avatar, Button, Card, Typography } from 'antd'
import { useRouter } from 'next/router'

const UserCard: FC<{ user: IUser; hideResult?: () => void }> = ({
	user,
	hideResult
}) => {
	const { push } = useRouter()

	return (
		<Card className={styles.card}>
			<Avatar src={user.avatarPath} alt={user.name} size={100} />
			<div style={{ marginTop: 5 }}>
				<Typography.Title level={4}>{user.name}</Typography.Title>
			</div>

			<div>
				<Button
					type="dashed"
					onClick={() => push(`/profile/${user._id}`).then(hideResult)}
				>
					Перейти у профіль
				</Button>
			</div>
		</Card>
	)
}

export default UserCard
