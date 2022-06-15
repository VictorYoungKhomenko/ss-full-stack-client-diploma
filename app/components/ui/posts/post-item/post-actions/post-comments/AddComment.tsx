import { FC } from 'react'
import { Button, Form, Input, notification } from 'antd'
import { useMutation } from 'react-query'
import { ICommentFields } from '@/types/comment.interface'
import { CommentService } from '@services/comment.service'
import { SendOutlined } from '@ant-design/icons'

const AddComment: FC<{ postId: string; refetch: any }> = ({
	postId,
	refetch
}) => {
	const [form] = Form.useForm()

	const { mutateAsync } = useMutation(
		'add comment',
		(data: ICommentFields) => CommentService.create({ ...data, postId }),
		{
			onSuccess(data) {
				form.resetFields()
				refetch()
			}
		}
	)

	const onFinish = async (values: ICommentFields) => {
		await mutateAsync(values)
	}

	const onFinishFailed = (errorInfo: any) => {
		notification.error({
			message: errorInfo
		})
	}

	return (
		<Form
			form={form}
			name="basic"
			wrapperCol={{ span: 24 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
			style={{ position: 'relative', marginTop: 25, maxWidth: 350 }}
		>
			<Form.Item
				name="message"
				rules={[{ required: true, message: "Текст коментара обов'язковий" }]}
			>
				<Input placeholder="Залишити коментар" />
			</Form.Item>

			<Button
				type="primary"
				htmlType="submit"
				style={{ position: 'absolute', right: 0, top: 0 }}
				icon={<SendOutlined />}
			/>
		</Form>
	)
}

export default AddComment
