import { FC, useState, FormEvent } from 'react'
import PinInput from 'react-pin-input'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { configuration } from '@pages/AuthPage/configuration.data'
import { Button } from '@components/UI'
import styles from './AuthForm.module.scss'

const AuthForm: FC = () => {
	const navigate = useNavigate()
	const [pin, setPin] = useState('')
	const secret = import.meta.env.VITE_APP_SECRET

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (pin == secret) {
			localStorage.setItem('secret', secret)
			navigate('/admin')
		} else {
			toast.error('Неверный пин-код')
		}
	}
	return (
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
	)
}

export default AuthForm
