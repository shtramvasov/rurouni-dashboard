import { FC, PropsWithChildren } from 'react'
import Header from './Header/Header'
import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<main className={styles.layout}>
			<Header />
			<section className={styles.wrapper}>{children}</section>
		</main>
	)
}

export default Layout
