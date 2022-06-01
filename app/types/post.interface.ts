import { IUser } from '@/types/user.interface'

export interface IPost {
	_id: string
	user: IUser
	createdAt: string
	content: string
	image: string
}
