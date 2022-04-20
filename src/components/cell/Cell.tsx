/** @jsxImportSource @emotion/react */

import { HTMLAttributes } from 'react'

import * as styles from './styles'

export interface CellProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode | React.ReactNode[]
  height?: number
  isPressed?: boolean
  width?: number
}

export const Cell = ({ children, height = 16, isPressed, width = 16, ...rest }: CellProps) => {
  return (
    <div
      css={[styles.cell, isPressed ? styles.pressed : styles.normal]}
      style={{ height, width }}
      {...rest}
    >
      {children}
    </div>
  )
}
