export interface IUser {
	_id: string
	email: string
	name: string
	avatar: string
	isVerified?: boolean
	location: string
	university?: string
	avatarPath?: string
	groupNumber?: string | number
	debtCount?: number
	haveStudentsDebt?: boolean
	gender?: string
	speciality?: string
	friends?: IUser[]
	postsCount?: number
}

export interface IUserFields {
	name: string
	location: string
	avatarPath: string
	speciality: string
	university: string
	groupNumber: number
}
