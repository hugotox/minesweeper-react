import '@emotion/react'
import { MineSweeperTheme } from './themes/types'

// https://emotion.sh/docs/typescript#define-a-theme
declare module '@emotion/react' {
  export interface Theme extends Omit<MineSweeperTheme, 'name'> {}
}
