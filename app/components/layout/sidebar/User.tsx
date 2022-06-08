import { useAuth } from '@/hooks/useAuth'
import { FC } from 'react'
import { Avatar, Button, Card, Col, Row } from 'antd'
import { AuthService } from '@services/auth/auth.service'

const User: FC = () => {
	const { user, setUser } = useAuth()

	return (
		<Card style={{
			padding: 2,
			backgroundColor: '#F1F7FA',
			border: 'none',
			borderRadius: 3,
			marginBottom: 5
		}}
		>
			<Row>
				<Col span={6}>
					<Avatar src={user?.avatarPath} alt='' />
				</Col>

				<Col span={18}>
					<p>{user?.name}</p>
				</Col>
			</Row>
			<Button type='dashed' onClick={() => {
				AuthService.logout()
				setUser && setUser(null)
			}}>
				Вийти
			</Button>
		</Card>
	)
}

export default User
