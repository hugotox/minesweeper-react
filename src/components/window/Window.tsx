/** @jsxImportSource @emotion/react */

import { HTMLAttributes } from 'react'

import { AppIcon } from '../../icons'
import { Button } from '../button'
import { Cell } from '../cell'
import { Menu } from '../menu'

import * as styles from './styles'

export interface WindowProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode | React.ReactNode[]
  height?: number
  title?: string
  width?: number
}

export const Window = ({ children, height, title, width }: WindowProps) => {
  return (
    <Cell css={styles.window} style={{ height, width }}>
      {title && (
        <div css={styles.title}>
          <div css={styles.flexContainer}>
            <AppIcon />
            {title}
          </div>
          <div css={styles.flexContainer}>
            <Button type="minimize" />
            <Button type="maximize" />
            <Button css={{ marginLeft: 2 }} type="close" />
          </div>
        </div>
      )}
      <Menu />
      {children}
    </Cell>
  )
}
