import * as S from './styled'

type ButtonProps = {
  label: string
  onClick: () => void
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <S.Btn onClick={onClick}>
      <span>{label}</span>
    </S.Btn>
  )
}
