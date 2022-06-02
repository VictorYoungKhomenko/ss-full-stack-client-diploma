import { useAuth } from '@/hooks/useAuth'
import { FC } from 'react'
import { Avatar, Button, Card, Col, Row } from 'antd'
import { users } from '@/components/layout/sidebar/dataUsers'

const User: FC = () => {
	const {} = useAuth()

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
					<Avatar src={users[0].avatar} />
				</Col>

				<Col span={18}>
					<p>{users[0]?.name || 'Без імені'}</p>
				</Col>
			</Row>
			<Button type='dashed' onClick={() => {
			}}>
				Вийти
			</Button>
		</Card>
	)
}

export default User
