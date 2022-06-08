import { useAuth } from '@/hooks/useAuth'
import { FC, useEffect } from 'react'
import { Button, Card, Typography } from 'antd'
import Image from 'next/image'
import GoogleIcon from './google.svg'
import styles from './Auth.module.scss'
import { useRouter } from 'next/router'
import Layout from '@/components/layout/Layout'

const Auth: FC = () => {
	const { user } = useAuth()

	const { push } = useRouter()

	useEffect(
		() => {
			if (user) push('/').then(r => r)
		},
		[push, user]
	)

	return (
		<Layout title="Вхід у систему">
			<Card className={styles.authWrapper}>
				<Typography.Title>Вхід у систему</Typography.Title>

				<Button
					type="primary"
					icon={
						<div className={styles.buttonIconWrapper}>
							<Image
								src={GoogleIcon.src}
								alt="google"
								width={24}
								height={24}
								priority
							/>
						</div>
					}
					size="large"
					onClick={() =>
						push(
							`https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fgoogle-auth&scope=email%20profile&client_id=${
								process.env.GOOGLE_CLIENT_ID
							}&flowName=GeneralOAuthFlow`
						)
					}
				>
					Вхід через гугл
				</Button>
			</Card>
		</Layout>
	)
}

export default Auth