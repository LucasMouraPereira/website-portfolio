import styled, { css } from 'styled-components'

export const WrapperSwiper = styled.div`
  ${({ theme }) => css`
    .swiper {
      width: 100%;
      padding-bottom: 50px;
    }
    .swiper-slide {
      background-position: center;
      background-size: cover;
    }
    .swiper-button-prev,
    .swiper-button-next,
    .swiper-pagination-bullets {
      color: ${theme.colors.palette.green[300]};
    }
  `}
`

export const WrapperText = styled.div`
  ${() => css`
    width: 100%;
    max-width: 1066px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.25);
    background-color: #3b82;
    margin-top: 16px;
  `}
`
export const Presentation = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 80px;
    margin-bottom: 16px;
  `}
`

export const WrapperList = styled.ul`
  ${() => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 0px 0px 16px 16px;
    flex-wrap: wrap;
    gap: 20px;
    li {
      font-size
    }
  `}
`

export const Slider = styled.div`
  ${() => css`
    position: relative;
    a {
      position: absolute;
      display: block;
      cursor: pointer;
      text-decoration: none;
      width: 100%;
      min-height: 425px;
      top: 0;
      left: 0;
      z-index: 3;
    }
    iframe {
      position: relative;
      display: block;
      width: 100%;
      min-height: 425px;
      object-fit: contain;
      border: none;
    }
  `}
`

export const WrapperButton = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
  `}
`
