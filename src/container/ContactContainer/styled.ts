import styled, { css } from 'styled-components'

export const PageContainer = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`

export const Form = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `}
`
