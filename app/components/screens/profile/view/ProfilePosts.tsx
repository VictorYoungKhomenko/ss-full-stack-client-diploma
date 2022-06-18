import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { PostService } from '@services/post.service'
import Posts from '@/components/ui/posts/Posts'
import AddPost from '@/components/ui/posts/AddPost'
import { useProfile } from '@/hooks/useProfile'

const ProfilePosts: FC<{ userId: string }> = ({ userId }) => {
	const { data: currentUser } = useProfile()

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
			{currentUser?._id === userId && <AddPost refetch={refetch} col={2} />}

			<Posts posts={data || []} isLoading={isLoading} refetchPosts={refetch} />
		</div>
	)
}

export default ProfilePosts
