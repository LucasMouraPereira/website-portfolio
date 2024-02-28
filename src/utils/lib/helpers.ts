import { toast } from 'react-toastify'

export const formatPhone = (phoneNumber: string) => {
  const cleaned = ('' + phoneNumber).replace(/\D/g, '')
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/)
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`
  }
  return phoneNumber
}

export const formatEmail = (email: string) => {
  email = email.trim()
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
  if (!emailPattern.test(email)) {
    return ''
  }
  return email.toLowerCase()
}

export const notifyLoading = () =>
  toast.loading('Estamos verificando o seus dados!', {
    progress: undefined,
  })

export const notifySuccess = () =>
  toast.update(notifyLoading(), {
    render: 'Email enviado com sucesso.',
    type: 'success',
    isLoading: false,
  })

export const notifyFail = () =>
  toast.update(notifyLoading(), {
    render: 'Erro ao enviar o email! Favor verificar os dados.',
    type: 'error',
    isLoading: false,
  })

export const dismissAll = () => toast.dismiss()
