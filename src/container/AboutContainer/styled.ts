import styled, { css } from 'styled-components'
import Link from 'next/link'

export const Presentation = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1140px;
    margin: 0 auto;
  `}
`

export const WrapperText = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 448px;
    gap: 24px;
    h4 {
      color: ${theme.colors.palette.green[300]};
      font-size: 24px;
      font-weight: ${theme.typography.weight.medium};
    }
    h2 {
      font-size: 36px;
      font-weight: ${theme.typography.weight.medium};
    }
    h3 {
      font-size: 18px;
      font-weight: ${theme.typography.weight.regular};
    }
    p {
      font-size: 16px;
      font-weight: ${theme.typography.weight.regular};
      color: ${theme.colors.palette.gray[300]};
      line-height: 160%;
    }

    ${theme.breakpoints.minWidth('lg')} {
      gap: unset;
      h4 {
        font-size: 32px;
      }
      h2 {
        font-size: 44px;
      }
      h3 {
        font-size: 26px;
      }
      p {
        font-size: 18px;
      }
    }
  `}
`

export const TextContent = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `}
`

export const SocialMedia = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      list-style: none;
      padding: 0;
      > a {
        cursor: pointer;
        > :hover {
          transition: border 0.2s ease-in-out;
          border: 1px solid ${theme.colors.palette.green[300]};
        }
        svg {
          path {
            width: 18px;
            fill: ${theme.colors.palette.green[300]};
          }
        }
      }
    }
  `}
`

export const WrapperLink = styled(Link)`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100px;

    ${theme.breakpoints.minWidth('sm')} {
      max-width: 150px;
    }

    ${theme.breakpoints.minWidth('md')} {
      max-width: 190px;
    }

    ${theme.breakpoints.minWidth('lg')} {
      max-width: 170px;
    }
  `}
`
