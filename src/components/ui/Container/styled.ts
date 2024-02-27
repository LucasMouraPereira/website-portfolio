import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    width: 100%;
    margin: 120px auto;
    max-width: ${theme.spacings.container.sm};

    ${theme.breakpoints.minWidth('md')} {
      max-width: ${theme.spacings.container.md};
    }

    ${theme.breakpoints.minWidth('lg')} {
      max-width: ${theme.spacings.container.lg};
    }

    ${theme.breakpoints.minWidth('xl')} {
      max-width: ${theme.spacings.container.xl};
    }

    ${theme.breakpoints.minWidth('xxl')} {
      max-width: ${theme.spacings.container.xxl};
    }
  `}
`
