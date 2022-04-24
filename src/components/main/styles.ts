import { css, Theme } from '@emotion/react'

export const main = ({ colors }: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  padding-top: 60px;
  background-color: ${colors.background};
`

export const window = css``

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
