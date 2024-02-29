import { useState } from 'react'
import { Section } from 'src/components/ui/Section'
import { Card } from 'src/components/ui/Card'

import Html5 from 'src/utils/icons/Html5.svg'
import CSS3 from 'src/utils/icons/CSS3.svg'
import JS from 'src/utils/icons/JavaScript.svg'
import TS from 'src/utils/icons/TypeScript.svg'
import ReactNative from 'src/utils/icons/ReactNative.svg'
import NextJs from 'src/utils/icons/Next.js.svg'
import CssInJS from 'src/utils/icons/styled-components.svg'
import Redux from 'src/utils/icons/Redux.svg'
import Sass from 'src/utils/icons/Sass.svg'
import Figma from 'src/utils/icons/Figma.svg'
import Graphql from 'src/utils/icons/Graphql.svg'

import { expertiseData } from './data'

import * as S from './styled'

interface Icons {
  [key: string]: JSX.Element
}

export const ExpertiseContainer = ({ id }: { id: string }) => {
  const [title, setTitle] = useState(expertiseData[0].title)
  const [description, setDescription] = useState(expertiseData[0].text)
  const customCard = {
    'background-color': '#3b82',
    width: '160px',
    margin: 'unset',
  }
  const icons: Icons = {
    html: <Html5 />,
    css: <CSS3 />,
    js: <JS />,
    ts: <TS />,
    reactjs: <ReactNative />,
    nextjs: <NextJs />,
    'react-native': <ReactNative />,
    'css-in-js': <CssInJS />,
    redux: <Redux />,
    sass: <Sass />,
    figma: <Figma />,
    graphql: <Graphql />,
  }
  return (
    <Section id={id}>
      <Card>
        <S.Title>Conhecimentos</S.Title>
        <S.Presentation>
          <S.Text>
            <h1>Conhecimentos</h1>
            <h3>{title}</h3>
            <p>{description}</p>
          </S.Text>
          <S.WrapperGap>
            {expertiseData.map(({ slug, title, text }) => (
              <Card styled={customCard} key={slug}>
                <S.ContentCard
                  slug={slug}
                  onMouseEnter={() => {
                    setTitle(title)
                    setDescription(text)
                  }}
                >
                  <h3>{title}</h3>
                  <div>{icons[slug]}</div>
                </S.ContentCard>
              </Card>
            ))}
          </S.WrapperGap>
        </S.Presentation>
      </Card>
    </Section>
  )
}
