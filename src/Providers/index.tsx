'use client'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'src/utils/styles/GlobalStyles'
import { theme } from 'src/utils/styles/theme'
import { Container } from 'src/components/ui/Container'
import { Header } from 'src/components/ui/Header'

import type { ChildrenProps } from 'src/utils/types/global.types'

export const Providers = ({ children }: ChildrenProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container className={`${theme.roboto_mono} font-sans`}>
        <Header />
        {children}
      </Container>
    </ThemeProvider>
  )
}
