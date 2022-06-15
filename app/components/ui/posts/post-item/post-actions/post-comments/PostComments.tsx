import { FC } from 'react'
import { Skeleton } from 'antd'
import AddComment from '@/components/ui/posts/post-item/post-actions/post-comments/AddComment'
import { useAuth } from '@/hooks/useAuth'
import CommentItem from '@/components/ui/posts/post-item/post-actions/post-comments/CommentItem'
import { IComment } from '@/types/comment.interface'

interface IQueryData {
	refetch: any,
	data?: IComment[],
	isLoading: boolean
}

const PostComments: FC<{ commentsQuery: IQueryData, postId: string }> = ({
																																					 commentsQuery: { refetch, data, isLoading },
																																					 postId
																																				 }) => {
	const { user } = useAuth()

	return (
		<div className='fade'>
			{user && <AddComment postId={postId} refetch={refetch} />}

			{isLoading ? (
				<Skeleton />
			) : data?.length ? (
				<>
					<div>
						{data.map(comment => (
							<CommentItem comment={comment} key={comment._id} />
						))}
					</div>
				</>
			) : (
				<p>Комментарі не знайдені</p>
			)}
		</div>
	)
}

export default PostComments
