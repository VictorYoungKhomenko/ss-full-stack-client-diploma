import { FC } from 'react'
import Link from 'next/link'
import { Avatar } from 'antd'
import { IPost } from '@/types/post.interface'
import { time2TimeAgo } from '../../../../utilities/convertData'

const UserInfo: FC<{ post: IPost }> = ({ post }) => {
	return (
		<Link href={`/profile/${post.user._id}`}>
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
					<Avatar size={46} src={post.user?.avatarPath} />
				</div>
				<div>
					<p style={{ fontSize: 14 }}>{post.user.name}</p>
					<p style={{ fontSize: 14, opacity: '0.6' }}>{time2TimeAgo(post.createdAt)}</p>
				</div>
			</a>
		</Link>
	)
}

export default UserInfo
