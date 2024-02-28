import styled from 'styled-components'
import { Body, Container, Section, Text } from '@react-email/components'

export const StyledBody = styled(Body)`
  background-color: #ffffff;
  color: #24292e;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
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
  padding: 24px;
  border: solid 1px #dedede;
  border-radius: 5px;
  text-align: center;
`

export const StyledText = styled(Text)`
  margin: 0 0 10px 0;
  text-align: left;
`
