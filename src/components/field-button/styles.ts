import { css, Theme } from '@emotion/react'

export const cellButton = css`
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
`

export const bombClicked = ({ colors }: Theme) => css`
  border-top-color: transparent;
  border-left-color: transparent;
  background-color: ${colors.red};
`
