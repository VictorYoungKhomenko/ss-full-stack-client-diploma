import { FC } from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import { Button, notification } from 'antd'
import { useMutation } from 'react-query'
import { PostService } from '@services/post.service'
import { errorCatch } from '../../../../../api/api.utils'

const PostLikesButton: FC<{ postId: string; refetch: any }> = ({
	postId,
	refetch
}) => {
	const { mutate, isLoading } = useMutation(
		'remove Post',
		() => PostService.delete(postId),
		{
			onSuccess() {
				refetch()
				notification.success({
					message: 'Пост видалено'
				})
			},
			onError(error) {
				notification.error({
					message: errorCatch(error)
				})
			}
		}
	)

	return (
		<Button
			type="text"
			style={{ position: 'absolute', top: 24, right: 24, opacity: 0.5 }}
			title="Видалити пост"
			onClick={() => mutate()}
			disabled={isLoading}
		>
			<DeleteOutlined style={{ color: '#F8466E' }} />
		</Button>
	)
}

export default PostLikesButton
