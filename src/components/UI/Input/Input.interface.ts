import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IInputProps {
	error?: FieldError | undefined
	small?: boolean
	responsive?: boolean
	outlined?: boolean
	secondary?: boolean
}

type TypeInputProps = InputHTMLAttributes<HTMLInputElement> & IInputProps

export interface IInput extends TypeInputProps {}
