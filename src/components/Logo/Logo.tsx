import { FC } from 'react'
import styles from './Logo.module.scss'
import logo from '@assets/images/logo-horizontal.svg'

const Logo: FC = () => {
	return <img src={logo} alt='Rurouni' className={styles.logo} />
}

export default Logo
