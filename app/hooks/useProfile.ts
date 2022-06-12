import { useQuery } from 'react-query'
import { UserService } from '@services/user.service'

export const useProfile = () => {
	const { isLoading, data } = useQuery(
		'get profile',
		() => UserService.getProfile(),
		{
			select: ({ data }) => data
		}
	)

	return { isLoading, data }
}
