import { axiosClassic } from '../../api/interceptors'

import {
	IAuthData,
	removeTokenFromStorage,
	saveToStorage
} from '@services/auth/auth.helper'

export const AuthService = {
	async loginGoogle(code: string) {
		const response = await axiosClassic.post<IAuthData>('/auth/login/google', {
			code
		})

		if (response.data.accessToken) saveToStorage(response.data)

		return response.data.user
	},

	logout() {
		removeTokenFromStorage()
		localStorage.removeItem('item')
	}
}
