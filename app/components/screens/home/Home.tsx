import { FC } from 'react'
import Posts from '@/components/ui/posts/Posts'
import AddPost from '@/components/ui/posts/AddPost'
import Layout from '@/components/layout/Layout'

const Home: FC = () => {
	return (
		<Layout>
			<AddPost />
			<Posts />
		</Layout>
	)
}

export default Home
