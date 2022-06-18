import { IUser } from '@/types/user.interface'

export interface IMessage {
	_id: string
	text: string
	userFrom: IUser
	userTo: IUser
}

export interface IMessageFields {
	text: string
	userToId: string
	userFromId: string
	conversationId: string
}

export interface IDeleteMessageFields
	extends Pick<IMessageFields, 'conversationId'> {
	messageId: string
}

export interface IConversation {
	_id: string
	messages: IMessage[]
}
