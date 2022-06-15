import { FC } from 'react'
import Link from 'next/link'
import { Avatar } from 'antd'
import { time2TimeAgo } from '../../../../utilities/convertData'
import { IUser } from '@/types/user.interface'

const UserInfo: FC<{ user: IUser, postDate?: string }> = ({ user, postDate }) => {
	return (
		<Link href={`/profile/${user._id}`}>
			<a
				style={{
					display: 'flex',
					alignItems: 'center',
					textDecoration: 'none',
					color: '#111',
					marginBottom: 12,
					maxWidth: 'max-content'
				}}
			>
				<div
					style={{
						position: 'relative',
						marginRight: '2',
						width: 50,
						height: 50
					}}
				>
					<Avatar size={46} src={user?.avatarPath} />
				</div>
				<div>
					<p style={{ fontSize: 14 }}>{user.name}</p>

					{
						postDate && <p style={{ fontSize: 14, opacity: '0.6' }}>{time2TimeAgo(postDate)}</p>
					}
				</div>
			</a>
		</Link>
	)
}

export default UserInfo
