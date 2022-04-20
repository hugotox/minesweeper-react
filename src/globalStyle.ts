import { css, Theme } from '@emotion/react'

export const global = ({ colors }: Theme) => css`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    user-select: none;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 12px;
    font-family: 'Source Sans Pro', sans-serif;
    line-height: 12px;
    background-color: ${colors.background};
  }
`
