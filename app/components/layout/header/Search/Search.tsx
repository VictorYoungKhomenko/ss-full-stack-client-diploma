import { FC } from 'react'
import styles from '@/components/layout/header/Header.module.css'
import { SearchOutlined } from '@ant-design/icons'
import { useOutside } from '@/hooks/useOutside'

const Search: FC = () => {
	const { ref, setIsShow, isShow } = useOutside(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			{!isShow && <SearchOutlined className="fade" />}
			<input
				type="text"
				placeholder="Пошук"
				className={isShow ? styles.active : ''}
				onClick={() => setIsShow(!isShow)}
			/>
		</div>
	)
}

export default Search
