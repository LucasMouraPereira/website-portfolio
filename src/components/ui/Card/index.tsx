import * as S from './styled'

import type { ChildrenProps } from 'src/utils/types/global.types'

type CardProps = {
  styled?: Record<string, string | number>
} & ChildrenProps

export const Card = ({ children, styled }: CardProps) => (
  <S.WrapperCard styled={styled}>{children}</S.WrapperCard>
)
