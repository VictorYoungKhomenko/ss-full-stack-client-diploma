import React, { FC } from 'react'
import { Col, Row } from 'antd'

interface IInfoItem {
	name: string
	value: string | number
}

const InfoItem: FC<IInfoItem> = ({ name, value }) => {
	return (
		<div style={{ marginTop: 15 }}>
			<Row style={{ textAlign: 'left', marginBottom: 10 }}>
				<Col span={12}>
					<b>{name}:</b>
				</Col>
				<Col span={12}>{value ? value : 'Немає даних'}</Col>
			</Row>
		</div>
	)
}

export default InfoItem
