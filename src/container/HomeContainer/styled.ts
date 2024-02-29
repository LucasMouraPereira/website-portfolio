import styled, { css, keyframes } from 'styled-components'

const bounceIn = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`

export const PageContainer = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

export const WrapperTitle = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `}
`

export const Presentation = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 16px;
    h1 {
      color: ${theme.colors.palette.green[300]};
      font-size: 36px;
    }
    h3 {
      font-size: 26px;
      width: 100%;
      justify-content: center;
      align-items: center;
      display: flex;
      text-align: center;
      padding-left: 32px;
    }
    span {
      font-size: 24px;
    }
    ${theme.breakpoints.minWidth('lg')} {
      padding: 68px;
      flex-direction: row;
      gap: unset;
      h3 {
        font-size: 46px;
        padding-left: unset;
      }
    }
  `}
`

export const ContentSvg = styled.div`
  ${() => css`
    animation: ${bounceIn} 1s ease-in-out;
  `}
`

export const TextAndIcon = styled.div`
  ${() => css`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  `}
`

export const Cv = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 100%;
    max-width: 400px;
    text-align: justify;
    p {
      font-size: 16px;
      font-weight: 300;
      color: ${theme.colors.palette.gray[300]};
      line-height: 160%;
    }
  `}
`
