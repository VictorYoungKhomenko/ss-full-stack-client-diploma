import { FC } from 'react'
import styles from '@/components/layout/header/Header.module.scss'
import { SearchOutlined } from '@ant-design/icons'
import { useSearch } from '@/components/layout/header/Search/useSearch'
import { Card, Skeleton } from 'antd'
import UserCard from '@/components/ui/user-card/UserCard'
import cn from 'classnames'

const Search: FC = () => {
	const { data, handleSearch, searchTerm, setSearchTerm, isLoading, visible } = useSearch()

	const hideResult = () => {
		setSearchTerm('')
		visible.setIsShow(false)
	}

	return (
		<div ref={visible.ref}
				 className={
					 cn(styles.wrapper,
						 {
							 [styles.active]: visible.isShow
						 })
				 }
		>
			{!visible.isShow && <SearchOutlined className='fade' />}

			<input
				type='text'
				placeholder='Пошук користувачів...'
				value={searchTerm}
				onClick={() => visible.setIsShow(!visible.isShow)}
				onChange={handleSearch}
			/>
			{visible.isShow && (
				<Card bordered={false} className={cn(styles.result, 'fade')}>
					{isLoading ? (
						<Skeleton />
					) : data?.length ?
						(data.map(user => <UserCard user={user} key={user._id} hideResult={hideResult} />)
						) : (
							<div style={{ textAlign: 'center' }}>Результатів немає!</div>
						)}
				</Card>
			)}
		</div>
	)
}

export default Search
