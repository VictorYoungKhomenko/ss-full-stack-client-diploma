import { FC } from 'react'
import Layout from '@/components/layout/Layout'
import { Card } from 'antd'

const Conversations: FC = () => {
	return (
		<Layout title="Діалоги">
			<Card bordered={false} bodyStyle={{ padding: '30px 0' }} />
		</Layout>
	)
}

export default Conversations
