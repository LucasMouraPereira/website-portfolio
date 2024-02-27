import type { ChildrenProps } from 'src/utils/types/global.types'
import * as S from './styled'

type ContainerProps = {
  id: string
} & ChildrenProps

export const Section = ({ children, id }: ContainerProps) => (
  <S.Section id={id}>{children}</S.Section>
)
