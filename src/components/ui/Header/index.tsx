import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTextAnimation } from 'src/utils/hooks/useTextAnimation'
import { dataHeader } from './data'

import Html from 'src/utils/icons/Html.svg'

import Home from 'src/utils/icons/Home.svg'
import About from 'src/utils/icons/About.svg'
import Expertise from 'src/utils/icons/Study.svg'
import Works from 'src/utils/icons/Monitor.svg'
import Experience from 'src/utils/icons/Code.svg'
import Contact from 'src/utils/icons/Email.svg'

import * as S from './styled'

interface Icons {
  [key: string]: JSX.Element
}

export const Header = () => {
  const [selected, setSelected] = useState<string | null>(null)
  const [isAtTop, setIsAtTop] = useState<boolean>(true)
  const [showAsideMenu, setShowAsideMenu] = useState<boolean>(false)
  const { logo, links } = dataHeader
  const displayText = useTextAnimation({ fullText: logo })

  const arrayLength: number = 3
  const menuIcon: number[] = Array.from(
    { length: arrayLength },
    (_, index) => index
  )

  const renderIconsMenu: Icons = {
    '00': <Home />,
    '01': <About />,
    '02': <Expertise />,
    '03': <Works />,
    '04': <Experience />,
    '05': <Contact />,
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <S.WrapperHeader isAtTop={isAtTop}>
      <S.ContentHeader>
        <S.WrapperLogo>
          <h2>
            {displayText} <b>._</b>
          </h2>
          <span>
            <Html />
            Dev Front-end
          </span>
        </S.WrapperLogo>

        <S.Menu>
          <S.WrapperLinks>
            {links.map((link) => (
              <S.Links
                onMouseOver={() => setSelected(link.id)}
                selected={selected === link.id}
                key={link.id}
              >
                <Link href={link.href}>
                  {renderIconsMenu[link.id]}
                  {link.label}
                </Link>
                <S.SelectedContent
                  selected={selected === link.id}
                  onClick={() => setSelected(link.id)}
                />
              </S.Links>
            ))}
          </S.WrapperLinks>
        </S.Menu>
      </S.ContentHeader>
      <S.MenuMobile onClick={() => setShowAsideMenu(!showAsideMenu)}>
        {menuIcon.map((_, index) => (
          <S.Line
            className={`line-${index}`}
            key={index}
            showAsideMenu={showAsideMenu}
          />
        ))}

        <S.AsideMenu showAsideMenu={showAsideMenu}>
          <S.WrapperLinks>
            {links.map((link) => (
              <S.Links
                onMouseOver={() => setSelected(link.id)}
                selected={selected === link.id}
                key={link.id}
              >
                <Link href={link.href}>
                  {renderIconsMenu[link.id]}
                  {link.label}
                </Link>
                <S.SelectedContent
                  selected={selected === link.id}
                  onClick={() => setSelected(link.id)}
                />
              </S.Links>
            ))}
          </S.WrapperLinks>
        </S.AsideMenu>
      </S.MenuMobile>
    </S.WrapperHeader>
  )
}
