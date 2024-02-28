import type { ChildrenProps } from 'src/utils/types/global.types'
import * as S from './styled'

export const Container = ({ children }: ChildrenProps) => (
  <S.Container>{children}</S.Container>
)
