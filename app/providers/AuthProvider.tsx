import Cookies from 'js-cookie'

import {
	createContext,
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	useEffect,
	useState
} from 'react'
import { useRouter } from 'next/router'
import { TypeUser } from '@services/auth/auth.helper'

// import {AuthService} from '@services/auth/auth.service'

interface IContext {
	user: TypeUser
	setUser: Dispatch<SetStateAction<TypeUser>> | null
}

export const AuthContext = createContext<IContext>({} as IContext)

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	// @ts-ignore
	const [user, setUser] = useState<TypeUser>(null)

	const { pathname } = useRouter()

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')

		if (accessToken) {
			const user = JSON.parse(localStorage.getItem('user') || '')

			setUser(user)
		}
	}, [])

	useEffect(
		() => {
			const accessToken = Cookies.get('accessToken')

			if (!accessToken && !user) {
				// AuthService.logout();
				// @ts-ignore
				setUser(null)
			}
		},
		[pathname]
	)

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}
