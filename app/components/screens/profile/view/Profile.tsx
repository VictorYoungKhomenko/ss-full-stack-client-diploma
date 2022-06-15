import { FC } from 'react'
import Layout from '@/components/layout/Layout'
import { Card, Col, Row, Spin } from 'antd'
import ProfileAvatar from '@/components/screens/profile/view/ProfileAvatar'
import { useQuery } from 'react-query'
import { UserService } from '@services/user.service'
import { useRouter } from 'next/router'
import { IUser } from '@/types/user.interface'
import ProfileInfo from '@/components/screens/profile/view/ProfileInfo/ProfileInfo'
import ProfilePosts from '@/components/screens/profile/view/ProfilePosts'

const Profile: FC = () => {
	const { query } = useRouter()
	const userId = query?.id

	const { isLoading, data } = useQuery(
		['get user', userId],
		() => UserService.getUser(String(userId)),
		{
			select: ({ data }) => data,
			enabled: !!userId
		}
	)

	return (
		<Layout title={data?.name || ''}>
			<Card bordered={false} bodyStyle={{ padding: '1rem 0' }}>
				<Row gutter={[20, 20]}>
					<Col span={5}>
						{
							isLoading ? <Spin /> : <ProfileAvatar profile={data || {} as IUser} />
						}
					</Col>

					<Col span={8}>
						{isLoading ? <Spin /> : <ProfileInfo profile={data || {} as IUser} />}
					</Col>

					<Col span={11}>
						{isLoading ? <Spin /> : data?._id && <ProfilePosts userId={data._id} />}
					</Col>
				</Row>
			</Card>
		</Layout>
	)
}

export default Profile
