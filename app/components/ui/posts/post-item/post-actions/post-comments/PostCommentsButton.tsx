import { FC } from 'react'
import { Button } from 'antd'
import { CommentOutlined } from '@ant-design/icons'
import { IPostCommentsButton } from '@/components/ui/posts/post-item/post-actions/PostActions'

const PostCommentsButton: FC<IPostCommentsButton> = ({
	postId,
	countComments,
	toggleComments
}) => {
	return (
		<Button icon={<CommentOutlined />} type={'dashed'} onClick={toggleComments}>
			<span>{countComments}</span>
		</Button>
	)
}

export default PostCommentsButton
