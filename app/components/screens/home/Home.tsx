import { FC } from 'react'
import Posts from '@/components/ui/posts/Posts'
import AddPost from '@/components/ui/posts/AddPost'

const Home: FC = () => {
	return (
		<div>
			<AddPost />
			<Posts />
		</div>
	)
}

export default Home
