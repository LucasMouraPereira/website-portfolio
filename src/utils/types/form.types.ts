import { UseFormRegister, FieldError } from 'react-hook-form'

export type Inputs = {
  fullName: string
  email: string
  phone: number
  subject: string
  message: string
}

export type InputProps = {
  type?: string
  pattern?: string
  register: UseFormRegister<Inputs>
  name: 'email' | 'fullName' | 'phone' | 'subject' | 'message'
  required?: string | boolean
  error?: FieldError
  placeholder?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export type TextareaProps = {
  register: UseFormRegister<Inputs>
  name: 'email' | 'fullName' | 'phone' | 'subject' | 'message'
  required?: string | boolean
  placeholder?: string
}
