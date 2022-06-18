import { FC } from 'react'
import Link from 'next/link'
import { Avatar } from 'antd'
import { time2TimeAgo } from '../../../../utilities/convertData'
import { IUser } from '@/types/user.interface'
import { CheckCircleTwoTone, DislikeFilled, LikeFilled } from '@ant-design/icons'

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
					<p style={{ fontSize: 14 }}>
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
					</p>

					{
						postDate && <p style={{ fontSize: 14, opacity: '0.6' }}>{time2TimeAgo(postDate)}</p>
					}
				</div>
			</a>
		</Link>
	)
}

export default UserInfo
