import { FC } from 'react'
import Layout from '@/components/layout/Layout'
import { Card } from 'antd'

const ConversationPage: FC = () => {
	return (
		<Layout title="Діалог">
			<Card bordered={false} bodyStyle={{ padding: '30px 0' }} />
		</Layout>
	)
}

export default ConversationPage
