/** @jsxImportSource @emotion/react */

import { ThemeProvider } from '@emotion/react'

import { Win98 } from '../themes'

export const withTheme = (Component: any) => (props: any) => {
  return (
    <ThemeProvider theme={Win98}>
      <Component {...props} />
    </ThemeProvider>
  )
}
