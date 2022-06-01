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
			<a>
				<div
					style={{
						position: 'relative',
						width: 50,
						height: 50,
						marginRight: 2
					}}
				>
					<Avatar src={user.avatar} size={46} />
					{user.isInNetwork && (
						<div
							style={{
								position: 'absolute',
								bottom: 0,
								right: 0,
								width: 12,
								height: 12,
								border: '2px solid #F1F7FA',
								borderRadius: '50%',
								backgroundColor: '#4FB14F'
							}}
						/>
					)}
				</div>
				<span style={{ fontSize: 14 }}>{user.name}</span>
			</a>
		</Link>
	)
}

export default UserItem
