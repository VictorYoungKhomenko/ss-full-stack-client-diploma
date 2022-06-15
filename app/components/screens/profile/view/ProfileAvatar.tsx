import { FC } from 'react'
import { IUser } from '@/types/user.interface'
import Image from 'next/image'
import { Button, Card } from 'antd'
import { useAuth } from '@/hooks/useAuth'
import { useProfile } from '@/hooks/useProfile'
import { UserService } from '@services/user.service'
import { useMutation } from 'react-query'

const ProfileAvatar: FC<{ profile: IUser }> = ({ profile }) => {
	const { user } = useAuth()

	const isMyProfile = user?._id === profile._id

	const { data, refetch } = useProfile()

	const isExistsFriend = data?.friends?.some(friend => friend._id === profile._id)

	const { mutate } = useMutation('toggle friend', () => UserService.toggleFriend(profile._id), {
		onSuccess: async () => {
			await refetch()
		}
	})

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

			<Button
				type='dashed'
				style={{ width: '100% ', marginTop: 20 }}
				disabled={isMyProfile}
				onClick={() => mutate()}
			>
				{isExistsFriend ? 'Видалити з друзів' : 'Додати у друзі'}
			</Button>

			<Button
				type='primary'
				style={{ width: '100%' }}
				disabled={isMyProfile}
			>
				Написати повідомлення
			</Button>
		</Card>
	)
}

export default ProfileAvatar
