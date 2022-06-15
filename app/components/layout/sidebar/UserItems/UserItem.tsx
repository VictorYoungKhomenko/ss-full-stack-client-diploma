import { FC } from 'react'
import { IUser } from '@/types/user.interface'
import Link from 'next/link'
import { Avatar } from 'antd'

const UserItem: FC<{ user: IUser }> = ({ user }) => {
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
				<span style={{ fontSize: 14 }}>{user.name}</span>
			</a>
		</Link>
	)
}

export default UserItem
