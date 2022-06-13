import { FC, useState } from 'react'
import { IPost } from '@/types/post.interface'
import { Card, Image } from 'antd'
import UserInfo from '@/components/ui/posts/post-item/UserInfo'
import styles from '../Post.module.scss'
import PostActions from '@/components/ui/posts/post-item/post-actions/PostActions'
import { useQuery } from 'react-query'
import { CommentService } from '@services/comment.service'
import PostComments from '@/components/ui/posts/post-item/post-actions/post-comments/PostComments'

const PostItem: FC<{ post: IPost }> = ({ post }) => {
	const commentsQuery = useQuery(
		['get comment', post._id],
		() => CommentService.getByPostId(post._id),
		{
			enabled: !!post._id,
			select: ({ data }) => data
		}
	)

	const [isOpenComment, setIsOpenComment] = useState(false)

	return (
		<Card className={styles.item} bodyStyle={{ transition: 'all 0.4s ease-in-out' }}>
			<UserInfo postDate={post.createdAt} user={post.user} />

			<p>{post.content}</p>
			{post.image && <Image width={400} src={post.image} alt='' />}

			<PostActions
				postId={post._id}
				countComments={commentsQuery.data?.length || 0}
				toggleComments={() => setIsOpenComment(!isOpenComment)}
			/>

			{isOpenComment && <PostComments commentsQuery={commentsQuery} postId={post._id} />}
		</Card>
	)
}

export default PostItem
