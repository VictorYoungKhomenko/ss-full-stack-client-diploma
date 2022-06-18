import { FC } from 'react'
import { List } from 'antd'
import Link from 'next/link'
import { IMenuItem } from '@/types/menu.interface'
import styles from '../sidebar/Sidebar.module.scss'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/useAuth'

const ListItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	const { user } = useAuth()

	if (item.link === '/profile') item.link = `${item.link}/${user?._id}`

	return (
		<List.Item className={styles.itemLink}>
			<List.Item.Meta
				title={
					<Link href={item.link}>
						<a
							style={
								asPath === item.link
									? {
										color: '#1890ff'
									}
									: {}
							}
						>
							<span style={{ marginRight: 6 }}>
								<item.icon />
							</span>

							<span>{item.title}</span>
						</a>
					</Link>
				}
			/>
		</List.Item>
	)
}

export default ListItem
