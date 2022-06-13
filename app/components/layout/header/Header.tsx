import { FC } from 'react'
import styles from './Header.module.css'
import logoImg from './logo.png'
import Search from '@/components/layout/header/Search/Search'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles['image-wrapper']}>
				{/* eslint-disable-next-line @next/next/on-img/element */}
				<img src={logoImg.src} />
			</div>
			<Search />
		</header>
	)
}

export default Header
