import * as S from './styled'

type ButtonProps = {
  type?: 'submit'
  children?: React.ReactNode
  label?: string
  onClick?: () => void
}

export const Button = ({ type, label, children, onClick }: ButtonProps) => {
  return !!type ? (
    <S.FormButton type={type}>{children}</S.FormButton>
  ) : (
    <S.Btn onClick={onClick}>
      <span>{label}</span>
    </S.Btn>
  )
}
