import type { InputProps } from 'src/utils/types/form.types'

import * as S from './styled'

export const Input = ({
  type,
  pattern,
  register,
  name,
  required,
  error,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <>
      <S.Input
        type={type}
        pattern={pattern}
        {...register(name, {
          required: required,
        })}
        placeholder={placeholder}
        onChange={onChange ? (e) => onChange(e) : undefined}
      />
      {error && <span>Campo Obrigatório</span>}
    </>
  )
}
