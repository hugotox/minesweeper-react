import { css, Theme } from '@emotion/react'

export const scoreView = ({ colors }: Theme) => css`
  display: flex;
  padding: 1px;
  border-top: solid 1px ${colors.gray};
  border-right: solid 1px ${colors.white};
  border-bottom: solid 1px ${colors.white};
  border-left: solid 1px ${colors.gray};
  border-radius: 1px;
  background-color: ${colors.black};
`

export const digital = css`
  position: relative;
  width: 11px;
  height: 21px;
  margin-right: 2px;
  border: 0;
  background: transparent;

  &:last-of-type {
    margin-right: 0;
  }

  &::after {
    position: absolute;
    top: -1px;
    left: -1px;
    content: ' ';
  }
`
