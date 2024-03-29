import { IUser } from '@/types/user.interface'
import { IPost } from '@/types/post.interface'

export interface IComment {
	_id: string
	message: string
	user: IUser
	post: IPost
}

export interface ICommentFields extends Pick<IComment, 'message'> {
	postId: string
}
