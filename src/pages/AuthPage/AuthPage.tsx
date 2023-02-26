import { FC, useState, FormEvent } from 'react'
import PinInput from 'react-pin-input'
import { useNavigate } from 'react-router-dom'
import Layout from '@components/Layout/Layout'
import { Button, Heading } from '@components/UI'
import styles from './AuthPage.module.scss'
import { configuration } from './configuration.data'

const AuthPage: FC = () => {
	const navigate = useNavigate()
	const [pin, setPin] = useState('')
	const secret = import.meta.env.VITE_APP_SECRET

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (pin == secret) {
			localStorage.setItem('secret', secret)
			navigate('/admin')
		} else {
			console.log('Пин неудача')
		}
	}
	return (
		<Layout>
			<div className={styles.authPage}>
				<Heading centered bold>
					Код для авторизации
				</Heading>

				<form className={styles.authform} onSubmit={onSubmit}>
					<PinInput
						length={4}
						type='numeric'
						inputMode='number'
						onChange={value => setPin(value)}
						{...configuration.pin}
					/>
					<Button blue wide>
						Проверить пин-код
					</Button>
				</form>
			</div>
		</Layout>
	)
}

export default AuthPage
