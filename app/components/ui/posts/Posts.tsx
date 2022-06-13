import { FC } from 'react'
import PostItem from '@/components/ui/posts/post-item/PostItem'
import { IPost } from '@/types/post.interface'
import { Alert, Skeleton } from 'antd'

const Posts: FC<{ posts: IPost[]; isLoading: boolean, refetchPosts: any }> = ({ posts, isLoading, refetchPosts }) => {
	return (
		<>
			{
				isLoading ? <Skeleton /> : posts?.length ? posts.map(post => <PostItem refetchPosts={refetchPosts} post={post}
																																							 key={post._id} />) :
					<Alert message={'Пости не знайдені'} style={{ marginTop: 20 }} />
			}
		</>
	)
}

export default Posts
