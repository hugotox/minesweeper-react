import { css, Theme } from '@emotion/react'

export const window = css`
  display: inline-flex;
  padding: 2px 4px 3px 3px;
  label: window;
`

export const title = ({ colors }: Theme) => css`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 20px;
  padding: 0 3px;
  color: ${colors.white};
  background-image: linear-gradient(to right, #00008b, #0083d7);
  label: title;

  img {
    margin-right: 4px;
  }
`

export const flexContainer = css`
  display: flex;
  align-items: center;
`
