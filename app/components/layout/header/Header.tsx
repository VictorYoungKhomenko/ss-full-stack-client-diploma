import { FC } from 'react'
import styles from './Header.module.scss'
import Search from '@/components/layout/header/Search/Search'
import logoImg from './image.png'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'
import cn from 'classnames'

const Header: FC = () => {
	const { user } = useAuth()

	return (
		<header
			className={cn(styles.header, {
				[styles.center]: !user
			})}
		>
			<div className={styles['image-wrapper']}>
				{/* eslint-disable-next-line @next/next/on-img/element */}
				<Link href={'/'} passHref>
					<a href="/">
						<img src={logoImg.src} className={styles['header__image']} />
					</a>
				</Link>
			</div>
			{user && <Search />}
		</header>
	)
}

export default Header
