import { css, Theme } from '@emotion/react'

export const six = ({ colors }: Theme) => css`
  &::after {
    box-shadow: 3px 1px 0 0 ${colors.teal}, 4px 1px 0 0 ${colors.teal}, 5px 1px 0 0 ${colors.teal},
      6px 1px 0 0 ${colors.teal}, 7px 1px 0 0 ${colors.teal}, 2px 2px 0 0 ${colors.teal},
      3px 2px 0 0 ${colors.teal}, 7px 2px 0 0 ${colors.teal}, 8px 2px 0 0 ${colors.teal},
      2px 3px 0 0 ${colors.teal}, 3px 3px 0 0 ${colors.teal}, 2px 4px 0 0 ${colors.teal},
      3px 4px 0 0 ${colors.teal}, 4px 4px 0 0 ${colors.teal}, 5px 4px 0 0 ${colors.teal},
      6px 4px 0 0 ${colors.teal}, 7px 4px 0 0 ${colors.teal}, 2px 5px 0 0 ${colors.teal},
      3px 5px 0 0 ${colors.teal}, 7px 5px 0 0 ${colors.teal}, 8px 5px 0 0 ${colors.teal},
      2px 6px 0 0 ${colors.teal}, 3px 6px 0 0 ${colors.teal}, 7px 6px 0 0 ${colors.teal},
      8px 6px 0 0 ${colors.teal}, 2px 7px 0 0 ${colors.teal}, 3px 7px 0 0 ${colors.teal},
      7px 7px 0 0 ${colors.teal}, 8px 7px 0 0 ${colors.teal}, 2px 8px 0 0 ${colors.teal},
      3px 8px 0 0 ${colors.teal}, 7px 8px 0 0 ${colors.teal}, 8px 8px 0 0 ${colors.teal},
      3px 9px 0 0 ${colors.teal}, 4px 9px 0 0 ${colors.teal}, 5px 9px 0 0 ${colors.teal},
      6px 9px 0 0 ${colors.teal}, 7px 9px 0 0 ${colors.teal};
    height: 1px;
    width: 1px;
  }
`
