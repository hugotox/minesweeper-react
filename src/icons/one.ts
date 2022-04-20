import { css, Theme } from '@emotion/react'

export const one = ({ colors }: Theme) => css`
  &::after {
    box-shadow: 5px 1px 0 0 ${colors.blue}, 6px 1px 0 0 ${colors.blue}, 4px 2px 0 0 ${colors.blue},
      5px 2px 0 0 ${colors.blue}, 6px 2px 0 0 ${colors.blue}, 3px 3px 0 0 ${colors.blue},
      4px 3px 0 0 ${colors.blue}, 5px 3px 0 0 ${colors.blue}, 6px 3px 0 0 ${colors.blue},
      5px 4px 0 0 ${colors.blue}, 6px 4px 0 0 ${colors.blue}, 5px 5px 0 0 ${colors.blue},
      6px 5px 0 0 ${colors.blue}, 5px 6px 0 0 ${colors.blue}, 6px 6px 0 0 ${colors.blue},
      5px 7px 0 0 ${colors.blue}, 6px 7px 0 0 ${colors.blue}, 5px 8px 0 0 ${colors.blue},
      6px 8px 0 0 ${colors.blue}, 3px 9px 0 0 ${colors.blue}, 4px 9px 0 0 ${colors.blue},
      5px 9px 0 0 ${colors.blue}, 6px 9px 0 0 ${colors.blue}, 7px 9px 0 0 ${colors.blue},
      8px 9px 0 0 ${colors.blue};
    height: 1px;
    width: 1px;
  }
`
