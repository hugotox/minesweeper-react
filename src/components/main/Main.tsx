/** @jsxImportSource @emotion/react */

import { useEffect, useRef, useState } from 'react'

import { Field, Panel, Window, ScoreView } from '../../components'
import {
  setCounter,
  useAppDispatch,
  useAppSelector,
  selectCounter,
  selectFieldSize,
  selectNumBombs,
  selectStatus,
  gameStart,
  createField,
} from '../../module'
import { Cell } from '../cell'

import * as styles from './styles'

export const Main = () => {
  const dispatch = useAppDispatch()
  const { numColumns, numRows } = useAppSelector(selectFieldSize)
  const numbBombs = useAppSelector(selectNumBombs)
  const counter = useAppSelector(selectCounter)
  const status = useAppSelector(selectStatus)
  const [isButtonPressed, setIsButtonPressed] = useState(false)

  const handleOnStart = () => {
    dispatch(gameStart())
  }

  const handleFieldClick = (i: number, j: number) => {
    console.log('click', i, j)
    if (status === 'stopped') {
      handleOnStart()
    }
  }
  const handleFieldRightClick = (i: number, j: number) => {
    console.log('right click', i, j)
    if (status === 'stopped') {
      handleOnStart()
    }
  }

  useEffect(() => {
    dispatch(createField())

    window.addEventListener('contextmenu', (event) => {
      event.preventDefault()
    })
  }, [dispatch])

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (status === 'playing') {
      timeout = setTimeout(() => {
        dispatch(setCounter(counter + 1))
      }, 1000)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [counter, status, dispatch])

  return (
    <div css={styles.main}>
      <Window title="Minesweeper">
        <Panel css={styles.panel}>
          <Panel borderWidth={2} css={styles.topPanel} pressed>
            <ScoreView value={numbBombs} />
            <button
              css={styles.playButton}
              onClick={handleOnStart}
              onMouseDown={() => setIsButtonPressed(true)}
              onMouseUp={() => setIsButtonPressed(false)}
            >
              <Cell css={isButtonPressed && styles.buttonPressed} height={24} width={24}>
                😎
              </Cell>
            </button>
            <ScoreView value={counter} />
          </Panel>
          <Panel pressed>
            <Field
              columns={numColumns}
              onClick={handleFieldClick}
              onRightClick={handleFieldRightClick}
              rows={numRows}
            />
          </Panel>
        </Panel>
      </Window>
    </div>
  )
}
