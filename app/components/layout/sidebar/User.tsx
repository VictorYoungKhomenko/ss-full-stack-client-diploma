import { useAuth } from '@/hooks/useAuth'
import { FC } from 'react'
import { Avatar, Button, Card, Col, List, Row } from 'antd'
import { AuthService } from '@services/auth/auth.service'
import styles from './Sidebar.module.scss'
import ListItem from '@/components/layout/sidebar/ListItem'
import { CheckCircleTwoTone, DislikeFilled, EditOutlined, LikeFilled } from '@ant-design/icons'
import { useProfile } from '@/hooks/useProfile'

const User: FC = () => {
	const { setUser } = useAuth()

	const { data } = useProfile()

	return (
		<Card className={styles.card}>
			<Row gutter={[5, 5]}>
				<Col span={5}>
					<Avatar src={data?.avatarPath} alt='' size={'large'} />
				</Col>

				<Col span={19} style={{ display: 'flex', alignItems: 'center' }}>
					<p>{data?.name}
						{
							data?.haveStudentsDebt ?
								<DislikeFilled style={{ color: '#f0262a', opacity: '0.5', marginLeft: 5 }} />
								:
								<LikeFilled style={{ color: '#1cff9d', opacity: '0.5', marginLeft: 5 }} />
						}

						{data?.isVerified && (
							<CheckCircleTwoTone style={{ color: '#5B9CE', opacity: '0.5', marginLeft: 5 }} />
						)}
					</p>
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
