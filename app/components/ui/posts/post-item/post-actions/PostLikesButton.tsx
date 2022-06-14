import { FC } from 'react'
import { Button } from 'antd'
import { HeartFilled, HeartOutlined } from '@ant-design/icons'
import { useMutation, useQuery } from 'react-query'
import { LogLikesService } from '@services/log-likes.service'
import { useAuth } from '@/hooks/useAuth'

const PostLikesButton: FC<{ postId: string }> = ({ postId }) => {
	const { user } = useAuth()

	const { data: likes, refetch } = useQuery(
		['get likes', postId],
		() => LogLikesService.getCountLikesByPostId(postId),
		{
			enabled: !!postId,
			select: ({ data }) => data
		}
	)

	const { data: isLiked, refetch: refetchLikeStatus } = useQuery(
		['check like by post id', postId],
		() => LogLikesService.checkExists(postId),
		{
			enabled: !!postId && !!user,
			select: ({ data }) => data
		}
	)

	const { mutate } = useMutation(
		['toggle like', postId],
		() => LogLikesService.toggleLike(postId),
		{
			onSuccess: async () => {
				await refetchLikeStatus()
				await refetch()
			}
		}
	)

	return (
		<Button
			icon={
				isLiked ? (
					<HeartFilled style={{ color: '#40A9FF' }} />
				) : (
					<HeartOutlined />
				)
			}
			type={'dashed'}
			onClick={() => mutate()}
			className="outline-none"
		>
			<span>{likes}</span>
		</Button>
	)
}

export default PostLikesButton
