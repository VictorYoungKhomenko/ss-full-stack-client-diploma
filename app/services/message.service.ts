import { axiosAuth } from '../api/interceptors'
import { IMessageFields } from '@/types/message.interface'

export const MessageService = {
	async create(body: IMessageFields) {
		return axiosAuth.post('/message')
	},

	async delete(messageId: string, conversationId: string) {
		return axiosAuth.delete(`/message/${messageId}`, {
			params: {
				conversationId
			}
		})
	}
}
