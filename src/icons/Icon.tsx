/** @jsxImportSource @emotion/react */
import { HTMLAttributes } from 'react'

import { iconStyle } from './iconStyle'

import * as Icons from './index'

export type IconNames =
  | 'bomb'
  | 'bombRed'
  | 'flag'
  | 'question'
  | 'questionFlat'
  | 'eight'
  | 'seven'
  | 'six'
  | 'five'
  | 'four'
  | 'three'
  | 'two'
  | 'one'
  | 'cross'

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  name: IconNames
}

export const Icon = ({ name, ...rest }: IconProps) => {
  return <div css={[iconStyle, Icons[name]]} {...rest} />
}
