import { FC } from 'react'
import { IUser } from '@/types/user.interface'
import Link from 'next/link'
import { Avatar } from 'antd'
import { CheckCircleTwoTone, DislikeFilled, LikeFilled } from '@ant-design/icons'

const UserItem: FC<{ user: IUser }> = ({ user }) => {
	console.log(user)

	return (
		<Link
			key={user._id}
			href={`/profile/${user._id}`}
			style={{
				display: 'flex',
				alignItems: 'center',
				marginBottom: 12,
				textDecoration: 'none',
				color: '#111'
			}}
		>
			<a style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
				<div
					style={{
						position: 'relative',
						width: 50,
						height: 50,
						marginRight: 5
					}}
				>
					<Avatar src={user.avatarPath} size={46} />
				</div>
				<span style={{ fontSize: 14 }}>
					{user.name}
					{
						user?.haveStudentsDebt ?
							<DislikeFilled style={{ color: '#f0262a', opacity: '0.5', marginLeft: 5 }} />
							:
							<LikeFilled style={{ color: '#1cff9d', opacity: '0.5', marginLeft: 5 }} />
					}

					{
						user?.isVerified &&
						<CheckCircleTwoTone style={{ color: '#5B9CE', opacity: '0.5', marginLeft: 5 }} />
					}
				</span>
			</a>
		</Link>
	)
}

export default UserItem
