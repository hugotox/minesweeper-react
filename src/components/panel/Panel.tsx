/** @jsxImportSource @emotion/react */

import { HTMLAttributes } from 'react'

import * as styles from './styles'

export interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  borderWidth?: number
  pressed?: boolean
}

export const Panel = ({ borderWidth = 3, children, pressed, ...rest }: PanelProps) => {
  return (
    <div css={[styles.panel, pressed && styles.pressed]} style={{ borderWidth }} {...rest}>
      {children}
    </div>
  )
}
