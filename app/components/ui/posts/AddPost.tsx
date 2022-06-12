import { FC, KeyboardEvent, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Alert, Card, Input, Skeleton } from 'antd'
import { useMutation } from 'react-query'
import { PostService } from '@services/post.service'
import { errorCatch } from '../../../api/api.utils'
import styles from './Post.module.scss'

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
				bodyStyle={{
					borderRadius: '10px'
				}}
				className={styles.item}
			>
				{isLoading ? (
					<Skeleton />
				) : (
					<Input
						placeholder="Розкажи, що в тебе нового"
						style={{ borderRadius: '10px' }}
						onKeyPress={addPostHandler}
						onChange={e => setContent(e.target.value)}
						value={content}
					/>
				)}
			</Card>
		</>
	)
}

export default AddPost
