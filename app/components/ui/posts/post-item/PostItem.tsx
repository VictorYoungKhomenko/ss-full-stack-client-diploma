import { FC } from 'react'
import { IPost } from '@/types/post.interface'
import { Card, Image } from 'antd'
import UserInfo from '@/components/ui/posts/post-item/UserInfo'
import styles from '../Post.module.scss'
import PostActions from '@/components/ui/posts/post-item/post-actions/PostActions'

const PostItem: FC<{ post: IPost }> = ({ post }) => {
	return (
		<Card className={styles.item}>
			<UserInfo post={post} />

			<p>{post.content}</p>
			{post.image && <Image width={400} src={post.image} alt="" />}

			<PostActions />
		</Card>
	)
}

export default PostItem
