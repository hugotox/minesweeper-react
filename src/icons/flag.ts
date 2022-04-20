import { css, Theme } from '@emotion/react'

export const flag = ({ colors }: Theme) => css`
  &::after {
    box-shadow: 2px 1px 0 0 ${colors.red}, 3px 1px 0 0 ${colors.red}, 4px 1px 0 0 ${colors.red},
      5px 1px 0 0 ${colors.red}, 6px 1px 0 0 ${colors.darkRed}, 2px 2px 0 0 ${colors.red},
      3px 2px 0 0 ${colors.red}, 4px 2px 0 0 ${colors.red}, 5px 2px 0 0 ${colors.darkRed},
      6px 2px 0 0 ${colors.darkRed}, 2px 3px 0 0 ${colors.red}, 3px 3px 0 0 ${colors.red},
      4px 3px 0 0 ${colors.darkRed}, 5px 3px 0 0 ${colors.darkRed}, 6px 3px 0 0 ${colors.darkRed},
      2px 4px 0 0 ${colors.red}, 3px 4px 0 0 ${colors.darkRed}, 4px 4px 0 0 ${colors.darkRed},
      5px 4px 0 0 ${colors.darkRed}, 6px 4px 0 0 ${colors.darkRed}, 6px 5px 0 0 ${colors.black},
      6px 6px 0 0 ${colors.black}, 6px 7px 0 0 ${colors.black}, 6px 8px 0 0 ${colors.black},
      5px 9px 0 0 ${colors.gray}, 6px 9px 0 0 ${colors.black}, 7px 9px 0 0 ${colors.gray},
      3px 10px 0 0 ${colors.gray}, 4px 10px 0 0 ${colors.black}, 5px 10px 0 0 ${colors.black},
      6px 10px 0 0 ${colors.black}, 7px 10px 0 0 ${colors.black}, 8px 10px 0 0 ${colors.black},
      9px 10px 0 0 ${colors.gray};
    height: 1px;
    width: 1px;
  }
`
