import { FC } from 'react'
import { initialPosts } from '@/components/screens/home/posts'
import PostItem from '@/components/ui/posts/PostItem'

const Posts: FC = () => {
	return (
		<>
			{initialPosts.map(post => (
				<PostItem post={post} key={post._id} />
			))}
		</>
	)
}

export default Posts
