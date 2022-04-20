import { css, Theme } from '@emotion/react'

export const four = ({ colors }: Theme) => css`
  &::after {
    box-shadow: 2px 1px 0 0 ${colors.darkBlue}, 3px 1px 0 0 ${colors.darkBlue},
      7px 1px 0 0 ${colors.darkBlue}, 8px 1px 0 0 ${colors.darkBlue}, 2px 2px 0 0 ${colors.darkBlue},
      3px 2px 0 0 ${colors.darkBlue}, 7px 2px 0 0 ${colors.darkBlue}, 8px 2px 0 0 ${colors.darkBlue},
      2px 3px 0 0 ${colors.darkBlue}, 3px 3px 0 0 ${colors.darkBlue}, 7px 3px 0 0 ${colors.darkBlue},
      8px 3px 0 0 ${colors.darkBlue}, 2px 4px 0 0 ${colors.darkBlue}, 3px 4px 0 0 ${colors.darkBlue},
      7px 4px 0 0 ${colors.darkBlue}, 8px 4px 0 0 ${colors.darkBlue}, 2px 5px 0 0 ${colors.darkBlue},
      3px 5px 0 0 ${colors.darkBlue}, 4px 5px 0 0 ${colors.darkBlue}, 5px 5px 0 0 ${colors.darkBlue},
      6px 5px 0 0 ${colors.darkBlue}, 7px 5px 0 0 ${colors.darkBlue}, 8px 5px 0 0 ${colors.darkBlue},
      7px 6px 0 0 ${colors.darkBlue}, 8px 6px 0 0 ${colors.darkBlue}, 7px 7px 0 0 ${colors.darkBlue},
      8px 7px 0 0 ${colors.darkBlue}, 7px 8px 0 0 ${colors.darkBlue}, 8px 8px 0 0 ${colors.darkBlue},
      7px 9px 0 0 ${colors.darkBlue}, 8px 9px 0 0 ${colors.darkBlue};
    height: 1px;
    width: 1px;
  }
`
