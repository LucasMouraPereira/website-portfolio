'use client'
import 'styled-components'
import { theme } from '../styles/theme'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors
    typography
    breakpoints
    roboto_mono
    spacings
  }
}
