import { useRouter } from 'next/navigation'
import { Card } from 'src/components/ui/Card'
import { Section } from 'src/components/ui/Section'
import { Button } from 'src/components/ui/Button'
import { useTextAnimation } from 'src/utils/hooks/useTextAnimation'

import Computer from 'src/utils/icons/computer.svg'

import * as S from './styled'

export const HomeContainer = ({ id }: { id: string }) => {
  const router = useRouter()
  const displayText = useTextAnimation({ fullText: 'Portfolio' })
  const customCard = {
    width: '1136px',
  }

  const downloadFile = () => {
    const fileUrl = '/Curriculo-Lucas Moura Pereira.pdf'
    const link = document.createElement('a')
    link.href = fileUrl
    link.setAttribute('download', 'Curriculo-Lucas Moura Pereira.pdf')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
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
                Frontend Developer with a degree in Software Engineering from
                the Pontifical Catholic University of Minas Gerais and
                experience in React.js, Next.js, Redux, JavaScript, TypeScript,
                Styled Components, Material UI, and consumption of REST and
                GraphQL APIs.
              </p>
              <Button label="Download CV" onClick={downloadFile} />
              <Button
                label="Learn more"
                onClick={() => router.push('/about')}
              />
            </S.Cv>
          </S.Presentation>
        </Card>
      </S.PageContainer>
    </Section>
  )
}
