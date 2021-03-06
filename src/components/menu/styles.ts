import { css, Theme } from '@emotion/react'

export const menu = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 4px;
`

export const button = ({ colors }: Theme) => css`
  display: inline-block;
  margin-right: 4px;
  padding: 0;
  border: 0;
  color: ${colors.black};
  font-size: 12px;
  background-color: transparent;

  > span {
    text-decoration: underline;
  }
`
