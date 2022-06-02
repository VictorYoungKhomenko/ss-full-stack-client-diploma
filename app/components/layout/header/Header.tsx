import { FC, useState } from 'react'
import styles from './Header.module.css'

const Header: FC = () => {
	const [isSearchActive, setIsSearchActive] = useState(false)

	return (
		<header className={styles.header}>
			{/*<div className={styles['image-wrapper']}>*/}
			{/*	/!* eslint-disable-next-line @next/next/on-img/element *!/*/}
			{/*	<img src={logoImg.src} />*/}
			{/*</div>*/}
			{/*<div className={styles.wrapper}>*/}
			{/*	<input*/}
			{/*		type="text"*/}
			{/*		placeholder="Пошук"*/}
			{/*		onClick={() => setIsSearchActive(true)}*/}
			{/*	/>*/}
			{/*</div>*/}
			HEADER
		</header>
	)
}

export default Header
