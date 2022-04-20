import { css, Theme } from '@emotion/react'

export const cell = ({ colors }: Theme) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${colors.lightGray};

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    background-color: transparent;
    content: '';
    pointer-events: none;
  }
`

export const normal = ({ colors }: Theme) => css`
  box-shadow: inset 1px 1px 1px 0px ${colors.white};

  &::after {
    box-shadow: inset -1px -1px 1px 0px ${colors.black};
  }
`

export const pressed = ({ colors }: Theme) => css`
  border-top: solid 1px ${colors.lightGray};
  border-right: dotted 1px ${colors.black};
  border-bottom: dotted 1px ${colors.black};
  border-left: solid 1px ${colors.lightGray};

  &::after {
    box-shadow: none;
  }
`
