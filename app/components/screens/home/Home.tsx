import { FC, useLayoutEffect } from 'react'
import Posts from '@/components/ui/posts/Posts'
import AddPost from '@/components/ui/posts/AddPost'
import Layout from '@/components/layout/Layout'
import { useQuery } from 'react-query'
import { PostService } from '@services/post.service'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router'

const Home: FC = () => {
	const { user } = useAuth()

	const { push } = useRouter()

	useLayoutEffect(
		() => {
			if (!user) push('/auth').then(r => r)
		},
		[push, user]
	)

	const { data, isLoading, refetch } = useQuery(
		'get all posts',
		() => PostService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	return (
		<Layout title="Головна">
			{user && (
				<div>
					<AddPost refetch={refetch} />
					<Posts
						posts={data || []}
						isLoading={isLoading}
						refetchPosts={refetch}
					/>
				</div>
			)}
		</Layout>
	)
}

export default Home
