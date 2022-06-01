import { IPost } from '@/types/post.interface'

export const initialPosts: IPost[] = [
	{
		_id: 'wegfwe',
		user: {
			_id: '123421',
			avatar:
				'https://images.ctfassets.net/hrltx12pl8hq/2BIpLnC0aRdDFCqI6l53kw/2c5ace6df01fe6a03ccc1d4ac07f540d/compressed_Hero-ngtv__2_.jpg?fit=fill&w=800&h=300',
			name: 'National Geographic'
		},
		content: 'Золотая осень в Украине. Снимал Виктор Хоменко.',
		createdAt: '15 минут назад',
		image:
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/autumn-in-the-white-mountains-of-new-hampshire-royalty-free-image-841380450-1567025100.jpg'
	}
]
