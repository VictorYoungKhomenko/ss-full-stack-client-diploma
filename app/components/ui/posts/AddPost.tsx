import { FC, KeyboardEvent, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Alert, Button, Card, Col, Input, Row, Skeleton } from 'antd'
import { useMutation } from 'react-query'
import { PostService } from '@services/post.service'
import { errorCatch } from '../../../api/api.utils'
import styles from './Post.module.scss'
import { PictureOutlined } from '@ant-design/icons'

const AddPost: FC = () => {
	const [content, setContent] = useState('')
	const { user } = useAuth()

	const { mutateAsync, isLoading, error } = useMutation(
		'add Post',
		() => PostService.create({ content }),
		{
			onSuccess() {
				setContent('')
			}
		}
	)

	const addPostHandler = async (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && user) {
			await mutateAsync()
		}
	}

	return (
		<>
			{error && <Alert message={errorCatch(error)} type="error" showIcon />}
			<Card
				style={{
					marginTop: 15
				}}
				className={styles.item}
			>
				{isLoading ? (
					<Skeleton />
				) : (
					<Row gutter={[15, 15]}>
						<Col span={1}>
							<Button type="dashed">
								<PictureOutlined />
							</Button>
						</Col>

						<Col span={23}>
							<Input
								placeholder="Розкажи, що в тебе нового"
								onKeyPress={addPostHandler}
								onChange={e => setContent(e.target.value)}
								value={content}
							/>
						</Col>
					</Row>
				)}
			</Card>
		</>
	)
}

export default AddPost
