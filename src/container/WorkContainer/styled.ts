import styled, { css } from 'styled-components'

export const WrapperPage = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

export const PageContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    h1 {
      width: 100%;
      font-size: 32px;
      color: ${theme.colors.palette.green[300]};
    }
  `}
`
