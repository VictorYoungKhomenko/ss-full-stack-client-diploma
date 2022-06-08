import { useAuth } from '@/hooks/useAuth'
import { FC, PropsWithChildren } from 'react'
import { Col, Row } from 'antd'
import Header from '@/components/layout/header/Header'
import Sidebar from '@/components/layout/sidebar/Sidebar'
import Head from 'next/head'

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
	children,
	title
}) => {
	const { user } = useAuth()

	return (
		<>
			<Head>
				<title>{title} | Students Social</title>
			</Head>

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
