import { useAuth } from '@/hooks/useAuth'
import { FC } from 'react'
import { Avatar, Button, Card, Col, List, Row } from 'antd'
import { AuthService } from '@services/auth/auth.service'
import styles from './Sidebar.module.scss'
import ListItem from '@/components/layout/sidebar/ListItem'
import { EditOutlined } from '@ant-design/icons'

const User: FC = () => {
	const { user, setUser } = useAuth()

	return (
		<Card className={styles.card}>
			<Row gutter={[5, 5]}>
				<Col span={5}>
					<Avatar src={user?.avatarPath} alt='' size={'large'} />
				</Col>

				<Col span={19} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<p>{user?.name}</p>
				</Col>
			</Row>

			<List style={{ marginTop: '1rem' }}>
				<ListItem
					item={{
						link: '/profile/edit',
						title: 'Редагування профіля',
						icon: EditOutlined
					}}
				/>
			</List>

			<Button
				type='dashed'
				onClick={() => {
					AuthService.logout()
					setUser && setUser(null)
				}}

			>
				Вийти
			</Button>
		</Card>
	)
}

export default User
