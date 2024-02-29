import { Section } from 'src/components/ui/Section'
import { Card } from 'src/components/ui/Card'
import { CustomSwiper } from 'src/components/ui/CustomSwiper'
import { data } from './data'

import * as S from './styled'

export const WorkContainer = ({ id }: { id: string }) => {
  const customCard = {
    width: '100%',
    'max-width': '1136px',
  }
  return (
    <Section id={id}>
      <S.WrapperPage>
        <Card styled={customCard}>
          <S.PageContainer>
            <h1>Projetos</h1>
            <CustomSwiper list={data} />
          </S.PageContainer>
        </Card>
      </S.WrapperPage>
    </Section>
  )
}
