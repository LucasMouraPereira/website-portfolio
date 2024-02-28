import styled, { css } from 'styled-components'

export const PageContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    ${theme.breakpoints.minWidth('lg')} {
      flex-direction: row;
      gap: 160px;
      padding: 32px;
    }
  `}
`

export const Text = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      width: 100%;
      font-size: 32px;
      color: ${theme.colors.palette.green[300]};
      margin-bottom: 10px;
    }
    h2 {
      width: 100%;
    }
  `}
`

export const Form = styled.form`
  ${() => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    h4 {
      font-size: 24px;
    }
  `}
`
