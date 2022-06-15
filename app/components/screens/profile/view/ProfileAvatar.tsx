import { FC } from 'react'
import { IUser } from '@/types/user.interface'
import Image from 'next/image'
import { Button, Card } from 'antd'
import { useAuth } from '@/hooks/useAuth'

const ProfileAvatar: FC<{ profile: IUser }> = ({ profile }) => {
	const { user } = useAuth()

	const isMyProfile = user?._id === profile._id

	return (
		<Card style={{ textAlign: 'center' }}>
			{profile.avatarPath && (
				<Image
					src={profile.avatarPath || ''}
					alt={profile.name}
					width={300}
					height={300}
					quality={90}
					layout={'responsive'}
				/>
			)}

			<Button type='primary' style={{ width: '100% ' }} disabled={isMyProfile}>
				Написати повідомлення
			</Button>

			<Button type='dashed' style={{ width: '100% ' }} disabled={isMyProfile}>
				Додати у друзі
			</Button>
		</Card>
	)
}

export default ProfileAvatar
