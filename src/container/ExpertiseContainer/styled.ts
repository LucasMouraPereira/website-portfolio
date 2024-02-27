import styled, { css } from 'styled-components'

export const Presentation = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    max-width: 1140px;
    margin: 0 auto;
    gap: 36px;
    h1 {
      font-size: 24px;
      font-weight: 500;
      display: none;
    }
    ${theme.breakpoints.minWidth('lg')} {
      flex-direction: row;
      gap: unset;
      h1 {
        font-size: 32px;
        display: block;
      }
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.palette.green[300]};
    font-size: 24px;
    font-weight: 500;
    display: block;
    ${theme.breakpoints.minWidth('lg')} {
      font-size: 32px;
      display: none;
    }
  `}
`

export const Text = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary[50]};
    h1 {
      color: ${theme.colors.palette.green[300]};
    }
  `}
`

export const WrapperGap = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 665px;
    gap: 8px;
    ${theme.breakpoints.minWidth('lg')} {
      justify-content: unset;
    }
  `}
`

type ContentCardProps = {
  slug: string
}

export const ContentCard = styled.div<ContentCardProps>`
  ${({ theme, slug }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    color: ${theme.colors.palette.green[300]};
    cursor: pointer;
    svg {
      width: 100px;
      stroke: ${slug === 'css-in-js' && theme.colors.palette.green[300]};
    }
  `}
`
