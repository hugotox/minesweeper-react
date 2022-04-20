import { css, Theme } from '@emotion/react'

export const main = ({ colors }: Theme) => css`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  padding-top: 100px;
  background-color: ${colors.background};
`

export const window = css`
  transform: scale(1.4);
`

export const panel = css`
  padding: 6px;
`

export const topPanel = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  padding: 4px 6px;
`

export const playButton = () => css`
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
`

export const buttonPressed = ({ colors }: Theme) => css`
  box-shadow: inset 1px 1px 1px 0px ${colors.black};

  &::after {
    box-shadow: inset -1px -1px 1px 0px ${colors.white};
  }
`
