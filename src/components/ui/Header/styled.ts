import styled, { css } from 'styled-components'

type WrapperHeaderProps = {
  $isAtTop: boolean
}
export const WrapperHeader = styled.nav<WrapperHeaderProps>`
  ${({ theme, $isAtTop }) => css`
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    background: ${$isAtTop
      ? theme.colors.context.page.bg
      : theme.colors.primary[250]};
    width: 100%;
    min-height: 80px;
    box-shadow: 2px 4px 4px 2px ${theme.colors.primary[300]};
    z-index: 100;
  `}
`

export const ContentHeader = styled.div`
  ${({ theme }) => css`
    width: 85%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.palette.green[300]};
  `}
`

export const WrapperLogo = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 172px;
    h1 {
      font-size: 28px;
      b {
        color: ${theme.colors.context.page.logo};
      }
    }
    span {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  `}
`

export const Menu = styled.div`
  ${({ theme }) => css`
    display: none;
    width: 100%;
    justify-content: flex-end;

    ${theme.breakpoints.minWidth('lg')} {
      display: flex;
    }
  `}
`

export const WrapperLinks = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: column;
    gap: 72px;
    ${theme.breakpoints.minWidth('lg')} {
      width: 80%;
      flex-direction: row;
      gap: unset;
    }
  `}
`

type LinksProps = {
  selected: boolean
}

export const Links = styled.div<LinksProps>`
  ${({ theme, selected }) => css`
    :hover {
      opacity: ${selected ? '0.5' : '1.0'};
    }
    a {
      display: flex;
      flex-direction: row;
      gap: 8px;
      cursor: pointer;
      color: ${theme.colors.primary[50]};
      text-decoration: none;
      font-size: 18px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 5px;
      svg {
        path {
          width: 18px;
        }
      }
    }
    ${theme.breakpoints.minWidth('lg')} {
      a {
        justify-content: center;
      }
    }
  `}
`

export const SelectedContent = styled.div<LinksProps>`
  ${({ theme, selected }) => css`
    margin-top: 3px;
    border: ${selected ? '1px' : '0px'} solid ${theme.colors.palette.green[300]};
    transition: transform 0.5s ease-out;
    transform-origin: right center;
    transform: translateX(${selected ? '0%' : '100%'});
  `}
`

export const MenuMobile = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ${theme.breakpoints.minWidth('lg')} {
      display: none;
    }
  `}
`

type LineProps = {
  $showAsideMenu: boolean
}

export const Line = styled.div<LineProps>`
  ${({ theme, $showAsideMenu }) => css`
    width: 32px;
    height: 1px;
    background-color: ${theme.colors.primary[50]};
    margin: 5px;
    transition: 0.4s;
    ${$showAsideMenu &&
    css`
      &.line-0 {
        transform: rotate(-45deg) translate(-11px, 10px);
      }
      &.line-1 {
        opacity: 0;
      }
      &.line-2 {
        transform: rotate(45deg) translate(-5px, -5px);
      }
    `}
  `}
`

export const AsideMenu = styled.aside<LineProps>`
  ${({ theme, $showAsideMenu }) => css`
    margin-top: 80px;
    width: 250px;
    height: 100%;
    background-color: ${theme.colors.context.page.bg};
    position: fixed;
    top: 0;
    right: ${$showAsideMenu ? '0' : '-250px'};
    transition: right 0.3s ease-in-out;
    padding: 20px;
    box-shadow: 2px 4px 4px 2px ${theme.colors.primary[300]};
    z-index: 2;
    border-radius: 8px;
  `}
`
