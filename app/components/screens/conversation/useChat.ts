import { useEffect, useState } from 'react'
import io, { Socket } from 'socket.io-client'
import { IConversation, IDeleteMessageFields, IMessageFields } from '@/types/message.interface'
import { DefaultEventsMap } from '@socket.io/component-emitter'

const SERVER_URL = 'http://localhost:4433'

export const useChat = (conversationId?: string | string[]) => {
	const [conversation, setConversation] = useState<IConversation>(
		{} as IConversation
	)

	const [socket, setSocket] = useState<Socket<DefaultEventsMap,
		DefaultEventsMap> | null>(null)

	useEffect(
		() => {
			if (!conversationId) return

			const newSocket = io(SERVER_URL, {
				query: { conversationId }
			})

			setSocket(newSocket)

			return () => {
				newSocket.close()
			}

		},
		[conversationId, setSocket]
	)

	useEffect(
		() => {
			if (!socket || !conversationId) return

			socket.emit('message:get', { conversationId })

			socket.on('conversation', conversation => {
				setConversation(conversation)
			})

			return () => {
				socket.disconnect()
			}
		},
		[conversationId, socket]
	)

	const sendMessage = (body: IMessageFields) => {
		socket?.emit('message:add', body)
	}

	const removeMessage = (body: IDeleteMessageFields) => {
		socket?.emit('message:delete', body)
	}

	return { conversation, sendMessage, removeMessage }
}
