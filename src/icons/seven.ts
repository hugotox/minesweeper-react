import { css, Theme } from '@emotion/react'

export const seven = ({ colors }: Theme) => css`
  &::after {
    box-shadow: 2px 1px 0 0 ${colors.darkViolet}, 3px 1px 0 0 ${colors.darkViolet},
      4px 1px 0 0 ${colors.darkViolet}, 5px 1px 0 0 ${colors.darkViolet},
      6px 1px 0 0 ${colors.darkViolet}, 7px 1px 0 0 ${colors.darkViolet},
      8px 1px 0 0 ${colors.darkViolet}, 2px 2px 0 0 ${colors.darkViolet},
      3px 2px 0 0 ${colors.darkViolet}, 7px 2px 0 0 ${colors.darkViolet},
      8px 2px 0 0 ${colors.darkViolet}, 7px 3px 0 0 ${colors.darkViolet},
      8px 3px 0 0 ${colors.darkViolet}, 6px 4px 0 0 ${colors.darkViolet},
      7px 4px 0 0 ${colors.darkViolet}, 6px 5px 0 0 ${colors.darkViolet},
      7px 5px 0 0 ${colors.darkViolet}, 5px 6px 0 0 ${colors.darkViolet},
      6px 6px 0 0 ${colors.darkViolet}, 5px 7px 0 0 ${colors.darkViolet},
      6px 7px 0 0 ${colors.darkViolet}, 4px 8px 0 0 ${colors.darkViolet},
      5px 8px 0 0 ${colors.darkViolet}, 4px 9px 0 0 ${colors.darkViolet},
      5px 9px 0 0 ${colors.darkViolet};
    height: 1px;
    width: 1px;
  }
`
