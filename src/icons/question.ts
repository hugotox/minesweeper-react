import { css, Theme } from '@emotion/react'

export const question = ({ colors }: Theme) => css`
  &::after {
    box-shadow: 4px 1px 0 0 ${colors.blue}, 5px 1px 0 0 ${colors.blue}, 6px 1px 0 0 ${colors.blue},
      7px 1px 0 0 ${colors.blue}, 3px 2px 0 0 ${colors.blue}, 4px 2px 0 0 ${colors.darkBlue},
      5px 2px 0 0 ${colors.darkBlue}, 6px 2px 0 0 ${colors.darkBlue}, 7px 2px 0 0 ${colors.blue},
      8px 2px 0 0 ${colors.darkBlue}, 3px 3px 0 0 ${colors.blue}, 4px 3px 0 0 ${colors.darkBlue},
      7px 3px 0 0 ${colors.blue}, 8px 3px 0 0 ${colors.darkBlue}, 9px 3px 0 0 ${colors.darkBlue},
      7px 4px 0 0 ${colors.blue}, 8px 4px 0 0 ${colors.darkBlue}, 9px 4px 0 0 ${colors.darkBlue},
      6px 5px 0 0 ${colors.blue}, 7px 5px 0 0 ${colors.darkBlue}, 8px 5px 0 0 ${colors.darkBlue},
      5px 6px 0 0 ${colors.blue}, 6px 6px 0 0 ${colors.darkBlue}, 7px 6px 0 0 ${colors.darkBlue},
      5px 7px 0 0 ${colors.blue}, 6px 7px 0 0 ${colors.darkBlue}, 7px 7px 0 0 ${colors.darkBlue},
      5px 9px 0 0 ${colors.blue}, 6px 9px 0 0 ${colors.darkBlue}, 7px 9px 0 0 ${colors.darkBlue},
      5px 10px 0 0 ${colors.blue}, 6px 10px 0 0 ${colors.darkBlue}, 7px 10px 0 0 ${colors.darkBlue};
    height: 1px;
    width: 1px;
  }
`
