import { css, Theme } from '@emotion/react'

export const bomb = ({ colors }: Theme) => css`
  &::after {
    box-shadow: 6px 1px 0 0 ${colors.gray}, 6px 2px 0 0 ${colors.black}, 3px 3px 0 0 ${colors.black},
      5px 3px 0 0 ${colors.gray}, 6px 3px 0 0 ${colors.black}, 7px 3px 0 0 ${colors.gray},
      9px 3px 0 0 ${colors.black}, 4px 4px 0 0 ${colors.black}, 5px 4px 0 0 ${colors.black},
      6px 4px 0 0 ${colors.black}, 7px 4px 0 0 ${colors.black}, 8px 4px 0 0 ${colors.black},
      3px 5px 0 0 ${colors.gray}, 4px 5px 0 0 ${colors.black}, 5px 5px 0 0 ${colors.white},
      6px 5px 0 0 ${colors.black}, 7px 5px 0 0 ${colors.black}, 8px 5px 0 0 ${colors.black},
      9px 5px 0 0 ${colors.gray}, 1px 6px 0 0 ${colors.gray}, 2px 6px 0 0 ${colors.black},
      3px 6px 0 0 ${colors.black}, 4px 6px 0 0 ${colors.black}, 5px 6px 0 0 ${colors.black},
      6px 6px 0 0 ${colors.black}, 7px 6px 0 0 ${colors.black}, 8px 6px 0 0 ${colors.black},
      9px 6px 0 0 ${colors.black}, 10px 6px 0 0 ${colors.black}, 11px 6px 0 0 ${colors.gray},
      3px 7px 0 0 ${colors.gray}, 4px 7px 0 0 ${colors.black}, 5px 7px 0 0 ${colors.black},
      6px 7px 0 0 ${colors.black}, 7px 7px 0 0 ${colors.black}, 8px 7px 0 0 ${colors.black},
      9px 7px 0 0 ${colors.gray}, 4px 8px 0 0 ${colors.black}, 5px 8px 0 0 ${colors.black},
      6px 8px 0 0 ${colors.black}, 7px 8px 0 0 ${colors.black}, 8px 8px 0 0 ${colors.black},
      3px 9px 0 0 ${colors.black}, 5px 9px 0 0 ${colors.gray}, 6px 9px 0 0 ${colors.black},
      7px 9px 0 0 ${colors.gray}, 9px 9px 0 0 ${colors.black}, 6px 10px 0 0 ${colors.black},
      6px 11px 0 0 ${colors.gray};
    height: 1px;
    width: 1px;
  }
`
