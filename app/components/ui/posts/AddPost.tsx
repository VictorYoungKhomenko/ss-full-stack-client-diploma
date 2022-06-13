import { FC, KeyboardEvent, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Alert, Card, Col, Image, Input, Row, Skeleton } from 'antd'
import { useMutation } from 'react-query'
import { PostService } from '@services/post.service'
import { errorCatch } from '../../../api/api.utils'
import styles from './Post.module.scss'
import { PictureOutlined } from '@ant-design/icons'
import UploadField from '@/components/ui/upload-field/UploadField'
import { IMediaResponse } from '@services/media.service'

const AddPost: FC<{ refetch: any }> = ({ refetch }) => {
	const [content, setContent] = useState('')
	const [image, setImage] = useState<IMediaResponse>({} as IMediaResponse)
	const { user } = useAuth()

	const { mutateAsync, isLoading, error } = useMutation(
		'add Post',
		() => PostService.create({ content, image: image.url }),
		{
			onSuccess() {
				refetch()
				setImage({} as IMediaResponse)
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
			{error && <Alert message={errorCatch(error)} type='error' showIcon />}
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
							<UploadField
								onChange={setImage}
								Button={
									<div className='ant-btn ant-btn-dashed'>
										<PictureOutlined />
									</div>
								}
							/>
						</Col>

						<Col span={23}>
							<Input
								placeholder='Розкажи, що в тебе нового'
								onKeyPress={addPostHandler}
								onChange={e => setContent(e.target.value)}
								value={content}
							/>
						</Col>
					</Row>
				)}

				{image?.url && (
					<div style={{ marginTop: 20 }}>
						<Image src={image.url} alt={image.name} width={200} />
					</div>
				)}
			</Card>
		</>
	)
}

export default AddPost
