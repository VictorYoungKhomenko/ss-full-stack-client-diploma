export interface IUser {
	_id: string
	name: string
	avatar: string
	isInNetwork?: boolean
	isVerified?: boolean
	location: string
	avatarPath?: string
	groupNumber?: number
	haveStudentsDebt?: boolean
	gender?: string
	speciality?: string
	friends?: IUser[]
}
