import React, { FC } from 'react'
import { Col } from 'antd'

interface ICountItem {
	number?: number
	title: string
}

const CountItem: FC<ICountItem> = ({ number, title }) => {
	return (
		<Col span={4}>
			<b style={{ fontSize: 20 }}>{number || 0}</b>

			<div>{title}</div>
		</Col>
	)
}

export default CountItem
