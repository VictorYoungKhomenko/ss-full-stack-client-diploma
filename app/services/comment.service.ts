import { axiosAuth, axiosClassic } from '../api/interceptors'
import { IComment } from '@/types/comment.interface'

export const CommentService = {
	async getByPostId(postId: string) {
		return axiosClassic.get<IComment[]>(`/comment/by-post/${postId}`)
	},

	async create(body: IComment) {
		return axiosAuth.post<IComment>('/comment', body)
	}
}
