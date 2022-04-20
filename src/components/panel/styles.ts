import { css, Theme } from '@emotion/react'

export const panel = ({ colors }: Theme) => css`
  border-top: solid ${colors.white};
  border-right: solid ${colors.gray};
  border-bottom: solid ${colors.gray};
  border-left: solid ${colors.white};
  background-color: ${colors.lightGray};
`

export const pressed = ({ colors }: Theme) => css`
  border-top: solid ${colors.gray};
  border-right: solid ${colors.white};
  border-bottom: solid ${colors.white};
  border-left: solid ${colors.gray};
`
