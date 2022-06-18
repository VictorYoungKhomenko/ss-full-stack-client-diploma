import { axiosAuth, axiosClassic } from '../api/interceptors'
import { IComment, ICommentFields } from '@/types/comment.interface'

export const CommentService = {
	async getByPostId(postId: string) {
		return axiosClassic.get<IComment[]>(`/comment/by-post/${postId}`)
	},

	async create(body: ICommentFields) {
		return axiosAuth.post<IComment>('/comment', body)
	}
}
