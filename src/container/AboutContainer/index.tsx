import Image from 'next/image'
import Link from 'next/link'
import { Section } from 'src/components/ui/Section'
import { Card } from 'src/components/ui/Card'

import { AboutData } from './data'

import Instagram from 'src/utils/icons/Instagram.svg'
import Linkedin from 'src/utils/icons/LinkedIn.svg'
import Github from 'src/utils/icons/GitHub.svg'

import * as S from './styled'

interface Icons {
  [key: string]: JSX.Element
}

export const AboutContainer = ({ id }: { id: string }) => {
  const customCard = {
    'background-color': 'rgba(59, 130, 246, 0.2)',
    width: '190px',
  }
  const icons: Icons = {
    instagram: <Instagram />,
    linkedin: <Linkedin />,
    github: <Github />,
  }
  return (
    <Section id={id}>
      <S.Presentation>
        <Card>
          <Image
            src={AboutData.image.src}
            width={AboutData.image.width}
            height={AboutData.image.height}
            alt={AboutData.image.alt}
          />
          <S.WrapperText>
            <S.TextContent>
              <h4>{AboutData.aboutMe.title}</h4>
              <h2>{AboutData.aboutMe.author}</h2>
              <h3>{AboutData.aboutMe.career}</h3>
              <p>{AboutData.aboutMe.presentation}</p>
            </S.TextContent>
            <S.SocialMedia>
              <ul>
                {AboutData.links.map(({ icon, link, text }) => (
                  <Link key={icon} href={link} target="blank">
                    <Card styled={customCard}>
                      <li>{icons[icon]}</li>
                      {text}
                    </Card>
                  </Link>
                ))}
              </ul>
            </S.SocialMedia>
          </S.WrapperText>
        </Card>
      </S.Presentation>
    </Section>
  )
}
