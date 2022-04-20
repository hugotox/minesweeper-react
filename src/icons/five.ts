import { css, Theme } from '@emotion/react'

export const five = ({ colors }: Theme) => css`
  &::after {
    box-shadow: 2px 1px 0 0 ${colors.darkRed}, 3px 1px 0 0 ${colors.darkRed},
      4px 1px 0 0 ${colors.darkRed}, 5px 1px 0 0 ${colors.darkRed}, 6px 1px 0 0 ${colors.darkRed},
      7px 1px 0 0 ${colors.darkRed}, 8px 1px 0 0 ${colors.darkRed}, 2px 2px 0 0 ${colors.darkRed},
      3px 2px 0 0 ${colors.darkRed}, 2px 3px 0 0 ${colors.darkRed}, 3px 3px 0 0 ${colors.darkRed},
      2px 4px 0 0 ${colors.darkRed}, 3px 4px 0 0 ${colors.darkRed}, 4px 4px 0 0 ${colors.darkRed},
      5px 4px 0 0 ${colors.darkRed}, 6px 4px 0 0 ${colors.darkRed}, 7px 4px 0 0 ${colors.darkRed},
      7px 5px 0 0 ${colors.darkRed}, 8px 5px 0 0 ${colors.darkRed}, 7px 6px 0 0 ${colors.darkRed},
      8px 6px 0 0 ${colors.darkRed}, 7px 7px 0 0 ${colors.darkRed}, 8px 7px 0 0 ${colors.darkRed},
      2px 8px 0 0 ${colors.darkRed}, 3px 8px 0 0 ${colors.darkRed}, 7px 8px 0 0 ${colors.darkRed},
      8px 8px 0 0 ${colors.darkRed}, 2px 9px 0 0 ${colors.darkRed}, 3px 9px 0 0 ${colors.darkRed},
      4px 9px 0 0 ${colors.darkRed}, 5px 9px 0 0 ${colors.darkRed}, 6px 9px 0 0 ${colors.darkRed},
      7px 9px 0 0 ${colors.darkRed};
    height: 1px;
    width: 1px;
  }
`
