import { css, Theme } from '@emotion/react'

export const button = css`
  position: relative;
`

export const icon = css`
  transform: scale(0.8);
`

export const minimize = ({ colors }: Theme) => css`
  position: absolute;
  bottom: 3px;
  display: inline-block;
  width: 7px;
  height: 2px;
  background-color: ${colors.black};
`

export const maximize = ({ colors }: Theme) => css`
  position: absolute;
  top: 3px;
  left: 3px;
  display: inline-block;
  width: 9px;
  height: 9px;
  border: solid 1px ${colors.white};
  border-top-width: 2px;

  &::after {
    position: absolute;
    top: -3px;
    left: -2px;
    display: inline-block;
    width: 9px;
    height: 9px;
    border: solid 1px ${colors.gray};
    border-top-width: 2px;
    content: ' ';
  }
`
