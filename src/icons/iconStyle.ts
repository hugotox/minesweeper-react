import { css } from '@emotion/react'

export const iconStyle = css`
  position: relative;
  width: 10px;
  height: 10px;
  border: 0;
  background: transparent;

  &::after {
    position: absolute;
    top: -1px;
    left: -1px;
    content: ' ';
  }
`
