import { axiosAuth, axiosClassic } from '../api/interceptors'
import { IUser } from '@/types/user.interface'

export const UserService = {
	async findUsers(searchTerm: string) {
		return axiosClassic.get<IUser[]>(`/user/find/${searchTerm}`)
	},

	async getUser(userId: string) {
		return axiosClassic.get<IUser>(`/user/by-id/${userId}`)
	},

	async getProfile() {
		return axiosAuth.get<IUser>(`/user/profile`)
	},

	async updateProfile() {
		return axiosAuth.put<IUser>('/user/profile')
	},

	async toggleFriend(friendId: string) {
		return axiosAuth.patch<boolean>(`/user/${friendId}`)
	}
}
