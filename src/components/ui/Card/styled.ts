import styled, { css, keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`
type WrapperCardProps = {
  styled?: Record<string, string | number>
}

export const WrapperCard = styled.div<WrapperCardProps>`
  ${({ theme, styled }) => css`
    width: 100%;
    background-color: ${theme.colors.palette.blue[100]};
    padding: 18px;
    border-radius: 4px;
    box-shadow: 2px 4px 4px 2px ${theme.colors.primary[300]};
    display: flex;
    flex-direction: column;
    height: auto;
    animation: ${fadeIn} 1s ease-in;
    gap: 4px;
    align-items: center;
    margin: 0 16px;
    color: ${theme.colors.primary[50]};

    ${theme.breakpoints.minWidth('sm')} {
      gap: 20px;
    }

    ${theme.breakpoints.minWidth('lg')} {
      flex-direction: row;
    }

    ${styled &&
    Object.entries(styled).map(
      ([property, value]) => css`
        ${property}: ${value};
      `
    )}
  `}
`
