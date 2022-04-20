import { css, Theme } from '@emotion/react'

export const two = ({ colors }: Theme) => css`
  &::after {
    box-shadow: 3px 1px 0 0 ${colors.darkGreen}, 4px 1px 0 0 ${colors.darkGreen},
      5px 1px 0 0 ${colors.darkGreen}, 6px 1px 0 0 ${colors.darkGreen},
      7px 1px 0 0 ${colors.darkGreen}, 2px 2px 0 0 ${colors.darkGreen},
      7px 2px 0 0 ${colors.darkGreen}, 8px 2px 0 0 ${colors.darkGreen},
      7px 3px 0 0 ${colors.darkGreen}, 8px 3px 0 0 ${colors.darkGreen},
      6px 4px 0 0 ${colors.darkGreen}, 7px 4px 0 0 ${colors.darkGreen},
      5px 5px 0 0 ${colors.darkGreen}, 6px 5px 0 0 ${colors.darkGreen},
      4px 6px 0 0 ${colors.darkGreen}, 5px 6px 0 0 ${colors.darkGreen},
      3px 7px 0 0 ${colors.darkGreen}, 4px 7px 0 0 ${colors.darkGreen},
      2px 8px 0 0 ${colors.darkGreen}, 3px 8px 0 0 ${colors.darkGreen},
      2px 9px 0 0 ${colors.darkGreen}, 3px 9px 0 0 ${colors.darkGreen},
      4px 9px 0 0 ${colors.darkGreen}, 5px 9px 0 0 ${colors.darkGreen},
      6px 9px 0 0 ${colors.darkGreen}, 7px 9px 0 0 ${colors.darkGreen},
      8px 9px 0 0 ${colors.darkGreen};
    height: 1px;
    width: 1px;
  }
`
