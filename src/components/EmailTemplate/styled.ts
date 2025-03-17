import styled, { css } from 'styled-components'
import { Body, Container, Section, Text } from '@react-email/components'

export const StyledBody = styled(Body)`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary[50]};
    color: ${theme.colors.context.page.text};
  `}
`

export const StyledContainer = styled(Container)`
  max-width: 480px;
  margin: 0 auto;
  padding: 20px 0 48px;
`

export const StyledTitle = styled(Text)`
  font-size: 24px;
  line-height: 1.25;
`

export const StyledSection = styled(Section)`
  ${({ theme }) => css`
    padding: 24px;
    border: solid 1px ${theme.colors.palette.gray[100]};
    border-radius: 5px;
    text-align: center;
  `}
`

export const StyledText = styled(Text)`
  margin: 0 0 10px 0;
  text-align: left;
`
