import { FC } from 'react'
import styles from './Header.module.scss'
import Search from '@/components/layout/header/Search/Search'
import logoImg from './image.png'
import Link from 'next/link'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles['image-wrapper']}>
				{/* eslint-disable-next-line @next/next/on-img/element */}
				<Link href={'/'} passHref>
					<a href="/">
						<img src={logoImg.src} className={styles['header__image']} />
					</a>
				</Link>
			</div>
			<Search />
		</header>
	)
}

export default Header
