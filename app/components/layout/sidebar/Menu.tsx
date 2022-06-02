import { FC } from 'react'
import { useRouter } from 'next/router'
import { Card, List } from 'antd'
import { menu } from '@/components/layout/sidebar/dataMenu'

const Menu: FC = () => {
	const { push } = useRouter()

	return (
		<Card
			bodyStyle={{
				padding: 2,
				backgroundColor: '#F1F7FA',
				border: 'none',
				borderRadius: 3,
				marginTop: 5,
				marginBottom: 5
			}}
		>
			<List itemLayout="vertical">
				{menu.map(item => (
					<List.Item
						key={item.link}
						onClick={() => push(item.link)}
						style={{ cursor: 'pointer' }}
					>
						<List.Item.Meta title={item.title} />
					</List.Item>
				))}
			</List>
		</Card>
	)
}

export default Menu
