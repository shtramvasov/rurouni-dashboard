import { ButtonHTMLAttributes } from 'react'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  green?: boolean
  blue?: boolean
  circle?: boolean
  large?: boolean
  wide?: boolean
  responsive?: boolean
}
