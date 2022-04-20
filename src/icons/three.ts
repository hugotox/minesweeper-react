import { css, Theme } from '@emotion/react'

export const three = ({ colors }: Theme) => css`
  &::after {
    box-shadow: 3px 1px 0 0 ${colors.red}, 4px 1px 0 0 ${colors.red}, 5px 1px 0 0 ${colors.red},
      6px 1px 0 0 ${colors.red}, 7px 1px 0 0 ${colors.red}, 7px 2px 0 0 ${colors.red},
      8px 2px 0 0 ${colors.red}, 7px 3px 0 0 ${colors.red}, 8px 3px 0 0 ${colors.red},
      3px 4px 0 0 ${colors.red}, 4px 4px 0 0 ${colors.red}, 5px 4px 0 0 ${colors.red},
      6px 4px 0 0 ${colors.red}, 7px 4px 0 0 ${colors.red}, 7px 5px 0 0 ${colors.red},
      8px 5px 0 0 ${colors.red}, 7px 6px 0 0 ${colors.red}, 8px 6px 0 0 ${colors.red},
      7px 7px 0 0 ${colors.red}, 8px 7px 0 0 ${colors.red}, 7px 8px 0 0 ${colors.red},
      8px 8px 0 0 ${colors.red}, 2px 9px 0 0 ${colors.red}, 3px 9px 0 0 ${colors.red},
      4px 9px 0 0 ${colors.red}, 5px 9px 0 0 ${colors.red}, 6px 9px 0 0 ${colors.red},
      7px 9px 0 0 ${colors.red};
    height: 1px;
    width: 1px;
  }
`
