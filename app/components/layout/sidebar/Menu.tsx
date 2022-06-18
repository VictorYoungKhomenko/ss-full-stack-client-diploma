import { FC } from 'react'
import { Card, List } from 'antd'
import styles from './Sidebar.module.scss'
import ListItem from '@/components/layout/sidebar/ListItem'
import { menu } from './dataMenu'

const Menu: FC = () => {
	return (
		<Card className={styles.card}>
			<List itemLayout="vertical">
				{menu.map(item => (
					<ListItem key={item.link} item={item} />
				))}
			</List>
		</Card>
	)
}

export default Menu
