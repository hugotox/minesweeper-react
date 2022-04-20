import { css, Theme } from '@emotion/react'

export const cross = ({ colors }: Theme) => css`
  &::after {
    box-shadow: 1px 1px 0 0 ${colors.red}, 2px 1px 0 0 ${colors.red}, 9px 1px 0 0 ${colors.red},
      10px 1px 0 0 ${colors.red}, 1px 2px 0 0 ${colors.darkRed}, 2px 2px 0 0 ${colors.red},
      3px 2px 0 0 ${colors.red}, 8px 2px 0 0 ${colors.red}, 9px 2px 0 0 ${colors.red},
      10px 2px 0 0 ${colors.darkRed}, 2px 3px 0 0 ${colors.darkRed}, 3px 3px 0 0 ${colors.red},
      4px 3px 0 0 ${colors.red}, 7px 3px 0 0 ${colors.red}, 8px 3px 0 0 ${colors.red},
      9px 3px 0 0 ${colors.darkRed}, 3px 4px 0 0 ${colors.darkRed}, 4px 4px 0 0 ${colors.red},
      5px 4px 0 0 ${colors.red}, 6px 4px 0 0 ${colors.red}, 7px 4px 0 0 ${colors.red},
      8px 4px 0 0 ${colors.darkRed}, 4px 5px 0 0 ${colors.darkRed}, 5px 5px 0 0 ${colors.red},
      6px 5px 0 0 ${colors.red}, 7px 5px 0 0 ${colors.darkRed}, 4px 6px 0 0 ${colors.red},
      5px 6px 0 0 ${colors.red}, 6px 6px 0 0 ${colors.red}, 7px 6px 0 0 ${colors.red},
      3px 7px 0 0 ${colors.red}, 4px 7px 0 0 ${colors.red}, 5px 7px 0 0 ${colors.darkRed},
      6px 7px 0 0 ${colors.darkRed}, 7px 7px 0 0 ${colors.red}, 8px 7px 0 0 ${colors.red},
      2px 8px 0 0 ${colors.red}, 3px 8px 0 0 ${colors.red}, 4px 8px 0 0 ${colors.darkRed},
      7px 8px 0 0 ${colors.darkRed}, 8px 8px 0 0 ${colors.red}, 9px 8px 0 0 ${colors.red},
      1px 9px 0 0 ${colors.red}, 2px 9px 0 0 ${colors.red}, 3px 9px 0 0 ${colors.darkRed},
      8px 9px 0 0 ${colors.darkRed}, 9px 9px 0 0 ${colors.red}, 10px 9px 0 0 ${colors.red},
      1px 10px 0 0 ${colors.darkRed}, 2px 10px 0 0 ${colors.darkRed}, 9px 10px 0 0 ${colors.darkRed},
      10px 10px 0 0 ${colors.darkRed};
    height: 1px;
    width: 1px;
  }
`
