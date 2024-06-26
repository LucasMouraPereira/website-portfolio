import Link from 'next/link'
import { useState } from 'react'
import { Section } from 'src/components/ui/Section'
import { Card } from 'src/components/ui/Card'
import { data } from './data'

import * as S from './styled'

export const ExperienceContainer = ({ id }: { id: string }) => {
  const [newExperience, setExperience] = useState(data[0])
  const customCard = {
    width: '100%',
    'max-width': '1136px',
  }
  return (
    <Section id={id}>
      <S.WrapperPage>
        <Card styled={customCard}>
          <S.PageContainer>
            <h1>Experiencias</h1>
            <S.WrapperExperience>
              <S.LinksList>
                {data.map((item) => (
                  <S.LinksItem
                    key={item.name}
                    onClick={() => setExperience(item)}
                    onMouseOver={() => setExperience(item)}
                    selected={newExperience.name === item.name}
                  >
                    <span>{item.name}</span>
                    <S.SelectedContent
                      selected={newExperience.name === item.name}
                      onClick={() => setExperience(item)}
                    />
                  </S.LinksItem>
                ))}
              </S.LinksList>
              <S.WrapperText>
                <S.Job>
                  <h2>{newExperience.jobTitle}</h2>
                  <span>{newExperience.date}</span>
                </S.Job>
                <S.Project>
                  <h2>
                    {newExperience.name}
                    <span> - {newExperience.company}</span>
                  </h2>

                  <p>{newExperience.text}</p>
                  <Link href={newExperience.link}>
                    <strong>Check out the website:</strong> {newExperience.link}
                  </Link>
                </S.Project>
              </S.WrapperText>
            </S.WrapperExperience>
          </S.PageContainer>
        </Card>
      </S.WrapperPage>
    </Section>
  )
}
