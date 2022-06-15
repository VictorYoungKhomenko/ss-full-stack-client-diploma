import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { PostService } from '@services/post.service'
import Posts from '@/components/ui/posts/Posts'
import AddPost from '@/components/ui/posts/AddPost'

const ProfilePosts: FC<{ userId: string }> = ({ userId }) => {
	const { data, isLoading, refetch } = useQuery(
		['get by user id', userId],
		() => PostService.getByUserId(userId),
		{
			select: ({ data }) => data,
			enabled: !!userId
		}
	)

	return (
		<div>
			<AddPost refetch={refetch} col={2} />
			<Posts posts={data || []} isLoading={isLoading} refetchPosts={refetch} />
		</div>
	)
}

export default ProfilePosts
