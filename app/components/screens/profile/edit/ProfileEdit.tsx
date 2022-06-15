import { FC } from 'react'
import Layout from '@/components/layout/Layout'
import { Card } from 'antd'

const EditEdit: FC = () => {
	return (
		<Layout title="Редагування профіля">
			<Card bordered={false} bodyStyle={{ padding: '30px 0' }} />
		</Layout>
	)
}

export default EditEdit
