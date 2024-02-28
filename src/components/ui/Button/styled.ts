import styled, { css } from 'styled-components'

export const Btn = styled.div`
  ${() => css`
    line-height: 50px;
    height: 50px;
    text-align: center;
    width: 250px;
    cursor: pointer;
    color: #fff;
    transition: all 0.3s;
    position: relative;
    span {
      transition: all 0.3s;
      &:hover {
        letter-spacing: 2px;
      }
    }
    ::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0;
      transition: all 0.3s;
      border-top-width: 1px;
      border-bottom-width: 1px;
      border-top-style: solid;
      border-bottom-style: solid;
      border-top-color: rgba(255, 255, 255, 0.5);
      border-bottom-color: rgba(255, 255, 255, 0.5);
      transform: scale(0.1, 1);
    }
    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      transition: all 0.3s;
      background-color: rgba(255, 255, 255, 0.1);
    }
    &:hover {
      ::before {
        opacity: 1;
        transform: scale(1, 1);
      }
      ::after {
        opacity: 0;
        transform: scale(0.1, 1);
      }
    }
  `}
`

export const FormButton = styled.button`
  ${() => css`
    line-height: 50px;
    height: 50px;
    text-align: center;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #fff;
    transition: all 0.3s;
    position: relative;
    span {
      transition: all 0.3s;
      &:hover {
        letter-spacing: 2px;
      }
    }
    ::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0;
      transition: all 0.3s;
      border-top-width: 1px;
      border-bottom-width: 1px;
      border-top-style: solid;
      border-bottom-style: solid;
      border-top-color: rgba(255, 255, 255, 0.5);
      border-bottom-color: rgba(255, 255, 255, 0.5);
      transform: scale(0.1, 1);
    }
    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      transition: all 0.3s;
      background-color: rgba(255, 255, 255, 0.1);
    }
    &:hover {
      ::before {
        opacity: 1;
        transform: scale(1, 1);
      }
      ::after {
        opacity: 0;
        transform: scale(0.1, 1);
      }
    }
  `}
`
