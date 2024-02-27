import { useRouter } from 'next/navigation'
import { Card } from 'src/components/ui/Card'
import { Section } from 'src/components/ui/Section'
import { Button } from 'src/components/ui/Button'
import { useTextAnimation } from 'src/utils/hooks/useTextAnimation'

import Computer from 'src/utils/icons/computer.svg'

import * as S from './styled'

export const HomeContainer = ({ id }: { id: string }) => {
  const router = useRouter()
  const displayText = useTextAnimation({ fullText: 'Portfólio' })
  const customCard = {
    width: '1136px',
  }
  return (
    <Section id={id}>
      <S.PageContainer>
        <Card styled={customCard}>
          <S.Presentation>
            <S.TextAndIcon>
              <S.WrapperTitle>
                <S.ContentSvg>
                  <Computer />
                </S.ContentSvg>
                <h1>{displayText}</h1>
              </S.WrapperTitle>
              <h3>Lucas Moura</h3>
              <span>&lt; Frontend Developer /&gt;</span>
            </S.TextAndIcon>
            <S.Cv>
              <p>
                Desenvolvedor Front-end formado em Engenharia de Software na
                Pontifícia Universidade de Minas Gerais e com experiência em
                React.js, Next.js, Redux, JavaScript, TypeScript, Styled
                Components, Material UI e consumo de APIs REST e GraphQL.
              </p>
              <Button
                label="Download CV"
                onClick={() => router.push('/about')}
              />
              <Button
                label="Saiba Mais"
                onClick={() => router.push('/about')}
              />
            </S.Cv>
          </S.Presentation>
        </Card>
      </S.PageContainer>
    </Section>
  )
}
