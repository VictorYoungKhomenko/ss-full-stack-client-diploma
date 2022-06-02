import { useAuth } from '@/hooks/useAuth'
import { FC } from 'react'

const Auth: FC = () => {
	const {} = useAuth()

	return <div>AUTH</div>
}

export default Auth
