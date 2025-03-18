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
      margin-bottom: 26px;
    }
    ${theme.breakpoints.minWidth('lg')} {
      padding: 32px;
    }
  `}
`

export const WrapperExperience = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    ${theme.breakpoints.minWidth('lg')} {
      flex-direction: row;
      gap: 160px;
    }
  `}
`

export const LinksList = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 6px;
    ${theme.breakpoints.minWidth('lg')} {
      flex-direction: column;
      gap: 16px;
      max-width: 250px;
      height: 100%;
    }
  `}
`

type LinksProps = {
  selected: boolean
}
export const LinksItem = styled.div<LinksProps>`
  ${({ theme, selected }) => css`
    width: 100%;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      opacity: ${selected ? '0.5' : '1.0'};
    }
    ${theme.breakpoints.minWidth('lg')} {
      font-size: 18px;
    }
  `}
`

export const SelectedContent = styled.div<LinksProps>`
  ${({ theme, selected }) => css`
    width: 32px;
    margin-top: 6px;
    margin-left: -16px;
    border: ${selected ? '1px' : '0px'} solid ${theme.colors.palette.green[300]};
    transition: transform 0.5s ease-out;
    transform-origin: left;
    transform: translateX(${selected ? '0%' : '100%'});
    rotate: -90deg;
  `}
`

export const Job = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
    h2 {
      font-size: 16px;
    }
    span {
      font-size: 14px;
      color: ${theme.colors.palette.gray[300]};
    }

    ${theme.breakpoints.minWidth('lg')} {
      h2 {
        font-size: 24px;
      }
      span {
        font-size: 16px;
      }
    }
  `}
`

export const Project = styled.div`
  ${({ theme }) => css`
    h2 {
      font-size: 14px;
      margin-bottom: 26px;
      color: ${theme.colors.palette.green[300]};
    }
    p {
      font-size: 14px;
      font-weight: ${theme.typography.weight.regular};
      color: ${theme.colors.palette.gray[300]};
      line-height: 160%;
      margin-bottom: 16px;
    }
    a {
      font-size: 14px;
      color: ${theme.colors.palette.green[300]};
      strong {
        color: ${theme.colors.palette.gray[300]};
      }
    }
    ${theme.breakpoints.minWidth('lg')} {
      h2 {
        font-size: 16px;
      }
      p {
        font-size: 16px;
      }
      a {
        font-size: 16px;
      }
    }
  `}
`

export const WrapperText = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 16px;
    box-shadow: 2px 4px 4px 2px ${theme.colors.primary[300]};
    background-color: ${theme.colors.palette.green[400]};
    ${theme.breakpoints.minWidth('lg')} {
      max-width: 530px;
    }
  `}
`
