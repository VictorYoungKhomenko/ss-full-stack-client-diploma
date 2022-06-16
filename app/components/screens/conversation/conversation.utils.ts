import { IMessage } from '@/types/message.interface'

export const isCurrentUserMessage = (
	item: IMessage,
	currentUserId?: string
) => {
	return currentUserId !== item.userFrom._id
}
