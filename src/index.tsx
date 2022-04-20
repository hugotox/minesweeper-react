/** @jsxImportSource @emotion/react */

import { ThemeProvider, Global } from '@emotion/react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { Main } from './components'
import { global } from './globalStyle'
import { store } from './module/store'
import { Win98 } from './themes'

const rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <ThemeProvider theme={Win98}>
      <Global styles={global} />
      <Main />
    </ThemeProvider>
  </Provider>,
  rootElement
)
