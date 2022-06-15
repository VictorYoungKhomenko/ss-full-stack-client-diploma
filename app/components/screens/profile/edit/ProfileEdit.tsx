import { FC, useState } from 'react'
import Layout from '@/components/layout/Layout'
import { Avatar, Button, Card, Form, Input, InputNumber, notification, Skeleton, Typography } from 'antd'
import UploadField from '@/components/ui/upload-field/UploadField'
import { IMediaResponse } from '@services/media.service'
import { UploadOutlined } from '@ant-design/icons'
import { IUserFields } from '@/types/user.interface'
import { UserService } from '@services/user.service'
import { useMutation } from 'react-query'
import { errorCatch } from '../../../../api/api.utils'
import { useProfile } from '@/hooks/useProfile'

const ProfileEdit: FC = () => {
	const [image, setImage] = useState<IMediaResponse>({} as IMediaResponse)

	const { isLoading, data, refetch } = useProfile(({ data }) => {
		setImage({
			name: 'default',
			url: data.avatarPath || ''
		})
	})

	const { mutateAsync } = useMutation('update profile', (body: IUserFields) => UserService.updateProfile(body), {
		onError: (error) => notification.error({
			message: errorCatch(error)
		}),
		onSuccess: async () => {
			notification.success({
				message: 'Профіль оновлено!'
			})

			await refetch()
		}
	})

	const onFinish = async (values: IUserFields) => {
		await mutateAsync({ ...values, avatarPath: image.url })
	}

	const onFinishFailed = (errorInfo: any) => {
		notification.error({
			message: errorInfo
		})
	}

	return (
		<Layout title='Редагування профіля'>
			<Card bordered={false} bodyStyle={{ padding: '30px 0' }}>
				<Typography.Title level={1}>Редагування профіля</Typography.Title>

				{
					isLoading ? (
						<Skeleton />
					) : (
						<Form
							labelCol={{ span: 4 }}
							wrapperCol={{ span: 7 }}
							layout='horizontal'
							initialValues={data || {}}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
						>
							<Form.Item
								name={'name'}
								label={`Ім'я`}
								rules={[{ required: true, message: `Будь ласка введіть ім'я!` }]}
							>
								<Input placeholder={`Введіть ім'я`} />
							</Form.Item>

							<Form.Item
								name={'location'}
								label='Місце проживання'
								rules={[
									{
										required: true,
										message: `Будь ласка введіть місце проживання!`
									}
								]}
							>
								<Input placeholder={`Введіть місце проживання`} />
							</Form.Item>

							<Form.Item
								name={'speciality'}
								label='Спеціальність'
								rules={[
									{
										required: true,
										message: `Будь ласка введіть назву спеціальності`
									}
								]}
							>
								<Input placeholder={`Введіть назву спеціальності`} />
							</Form.Item>

							<Form.Item
								name={'university'}
								label='Навчальний заклад'
								rules={[
									{
										required: true,
										message: `Будь ласка введіть вищого навчального закладу!`
									}
								]}
							>
								<Input placeholder={`Введіть назву вищого навчального закладу`} />
							</Form.Item>

							<Form.Item
								name={'groupNumber'}
								label='Номер групи'
								rules={[
									{
										required: true,
										message: `Будь ласка введіть номер групи!`
									}
								]}>
								<InputNumber />
							</Form.Item>

							<Form.Item>
								{
									image?.url && <Avatar
										src={image.url}
										alt={image.name}
										size={120}
										style={{ marginBottom: 10 }}
									/>
								}

								<UploadField
									onChange={setImage}
									Button={
										<div
											className='ant-btn ant-btn-default'
											style={{ cursor: 'pointer' }}
										>
											<UploadOutlined />

											<span>
												Натисніть для загрузки
											</span>
										</div>
									}
								/>
							</Form.Item>

							<Form.Item>
								<Button htmlType={'submit'}>Оновити дані профіля</Button>
							</Form.Item>
						</Form>
					)
				}
			</Card>
		</Layout>
	)
}

export default ProfileEdit
