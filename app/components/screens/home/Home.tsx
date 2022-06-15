import { FC } from 'react'
import Posts from '@/components/ui/posts/Posts'
import AddPost from '@/components/ui/posts/AddPost'
import Layout from '@/components/layout/Layout'
import { useQuery } from 'react-query'
import { PostService } from '@services/post.service'

const Home: FC = () => {
	const { data, isLoading, refetch } = useQuery(
		'get all posts',
		() => PostService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	return (
		<Layout title="Головна">
			<div>
				<AddPost refetch={refetch} />
				<Posts
					posts={data || []}
					isLoading={isLoading}
					refetchPosts={refetch}
				/>
			</div>
		</Layout>
	)
}

export default Home
