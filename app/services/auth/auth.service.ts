import { axiosClassic } from '../../api/interceptors'

export const AuthService = {
	async loginGoogle(code: string) {
		return axiosClassic.post('/auth/login/google', {
			code
		})
	}
}
