import type { TextareaProps } from 'src/utils/types/form.types'

import * as S from './styled'

export const Textarea = ({
  register,
  name,
  required,
  placeholder,
}: TextareaProps) => {
  return (
    <>
      <S.Textarea
        {...register(name, {
          required: required,
        })}
        placeholder={placeholder}
      />
    </>
  )
}
