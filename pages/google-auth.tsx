import type { NextPage } from 'next'
import { useMutation } from 'react-query'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { notification, Spin } from 'antd'
import { AuthService } from '@services/auth/auth.service'
import { errorCatch } from '../app/api/api.utils'
import { useAuth } from '@/hooks/useAuth'

const GoogleAuthPage: NextPage = () => {
	const { setUser } = useAuth()
	const { query, push } = useRouter()
	const code = query?.code

	const { mutate } = useMutation(
		'send code token',
		(code: string) => AuthService.loginGoogle(code),
		{
			async onSuccess(user) {
				notification.success({
					message: 'Авторизація пройшла успішно! '
				})
				setUser && setUser(user)
				await push('/')
			},

			onError(error) {
				notification.error({
					message: errorCatch(error)
				})
			}
		})

	useEffect(() => {
		if (code) mutate(String(code))
	}, [code, mutate])

	return <div className='center-block'>
		<Spin size='large' />
	</div>
}

export default GoogleAuthPage
