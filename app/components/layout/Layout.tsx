import { useAuth } from '@/hooks/useAuth'
import { FC, PropsWithChildren } from 'react'
import { Col, Row } from 'antd'
import Header from '@/components/layout/header/Header'
import Sidebar from '@/components/layout/sidebar/Sidebar'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const user = useAuth()

	return (
		<>
			<Header />

			<Row gutter={[5, 2]}>
				{user && (
					<Col span={6}>
						<Sidebar />
					</Col>
				)}

				<Col span={user ? 18 : 24}>
					<div>{children}</div>
				</Col>
			</Row>
		</>
	)
}

export default Layout
