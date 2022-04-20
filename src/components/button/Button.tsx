/** @jsxImportSource @emotion/react */

import { ThemeProvider } from '@emotion/react'
import { HTMLAttributes } from 'react'

import { Icon } from '../../icons'
import { GrayScale } from '../../themes'
import { Cell } from '../cell'

import * as styles from './styles'

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  type: 'close' | 'minimize' | 'maximize'
}

export const Button = ({ type, ...rest }: ButtonProps) => {
  return (
    <Cell height={14} width={16} {...rest}>
      <ThemeProvider theme={GrayScale}>
        {type === 'close' && <Icon css={styles.icon} name="cross" />}
        {type === 'minimize' && <span css={styles.minimize} />}
        {type === 'maximize' && <span css={styles.maximize} />}
      </ThemeProvider>
    </Cell>
  )
}
