import React, { FC } from 'react'
import { IUser } from '@/types/user.interface'
import { Card, Row, Typography } from 'antd'
import { numWord } from '../../../../../utilities/numWord'
import InfoItem from '@/components/screens/profile/view/ProfileInfo/InfoItem'
import CountItem from '@/components/screens/profile/view/ProfileInfo/CountItem'

const ProfileInfo: FC<{ profile: IUser }> = ({ profile }) => {
	return (
		<Card style={{ textAlign: 'center' }}>
			<Typography.Title level={1}>
				{profile.name}
			</Typography.Title>

			<div style={{ marginBottom: 25 }}>
				<InfoItem name={'Місце проживання'} value={profile.location} />
				<InfoItem name={'Місце навчання'} value={profile.university || ''} />
				<InfoItem name={'Спеціальність'} value={profile.speciality || ''} />
				<InfoItem name={'Номер групи'} value={profile.groupNumber || ''} />
			</div>

			<Row gutter={[15, 15]}>
				<CountItem
					number={profile?.friends?.length}
					title={numWord(profile?.friends?.length || 0, ['друг', 'друга', 'друзів'])}
				/>

				<CountItem
					number={profile.postsCount}
					title={numWord(profile.postsCount || 0, ['пост', 'поста', 'постів'])}
				/>

				<CountItem
					number={profile.debtCount}
					title={numWord(profile.debtCount || 0, ['борг', 'борги', 'боргів'])}
				/>
			</Row>
		</Card>
	)
}

export default ProfileInfo
