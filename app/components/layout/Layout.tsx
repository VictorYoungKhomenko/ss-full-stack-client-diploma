import { useAuth } from '@/hooks/useAuth'
import { FC, PropsWithChildren } from 'react'
import { Col, Row } from 'antd'
import Header from '@/components/layout/header/Header'
import Sidebar from '@/components/layout/sidebar/Sidebar'
import Head from 'next/head'
import styles from './Layout.module.scss'

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

			<div style={{ paddingLeft: 10, paddingRight: 10 }}>
				<Row gutter={[20, 30]} className={styles.row}>
					{user && (
						<Col span={4}>
							<Sidebar />
						</Col>
					)}

					<Col span={user ? 20 : 24}>
						<div>{children}</div>
					</Col>
				</Row>
			</div>
		</>
	)
}

export default Layout
