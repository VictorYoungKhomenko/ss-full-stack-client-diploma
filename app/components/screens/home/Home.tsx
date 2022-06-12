import { FC } from 'react'
import Posts from '@/components/ui/posts/Posts'
import AddPost from '@/components/ui/posts/AddPost'
import Layout from '@/components/layout/Layout'
import { useQuery } from 'react-query'
import { PostService } from '@services/post.service'

const Home: FC = () => {
	const { data, isLoading } = useQuery(
		'get all posts',
		() => PostService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	return (
		<Layout title="Головна">
			<div>
				<AddPost />
				<Posts posts={data || []} isLoading={isLoading} />
			</div>
		</Layout>
	)
}

export default Home
