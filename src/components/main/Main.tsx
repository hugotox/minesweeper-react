/** @jsxImportSource @emotion/react */

import { useCallback, useEffect, useState } from 'react'

import { Field, Panel, Window, ScoreView, PlainTextField } from '../../components'
import { createField } from '../../helpers'
import {
  setCounter,
  useAppDispatch,
  useAppSelector,
  selectCounter,
  selectFieldSize,
  selectNumBombs,
  selectStatus,
  gameStart,
  setField,
  selectField,
  updateCellStatus,
  revealConnectedCells,
  gameOver,
} from '../../module'
import { BOMB_CELL } from '../../module/gameSlice'
import { Cell } from '../cell'

import * as styles from './styles'

export const Main = () => {
  const dispatch = useAppDispatch()
  const { numColumns, numRows } = useAppSelector(selectFieldSize)
  const numBombs = useAppSelector(selectNumBombs)
  const counter = useAppSelector(selectCounter)
  const status = useAppSelector(selectStatus)
  const field = useAppSelector(selectField)
  const [isButtonPressed, setIsButtonPressed] = useState(false)

  const initGame = useCallback(() => {
    dispatch(setField(createField({ numBombs, numColumns, numRows })))
  }, [dispatch, numBombs, numColumns, numRows])

  const handleOnStart = () => {
    initGame()
    dispatch(gameStart())
  }

  const handleFieldClick = (i: number, j: number) => {
    if (status === 'stopped') {
      dispatch(gameStart())
    }
    if (field[i][j].status !== 'clicked' && field[i][j].status !== 'revealed') {
      dispatch(updateCellStatus({ i, j, status: 'clicked' }))
      if (field[i][j].numBombs === BOMB_CELL) {
        dispatch(gameOver())
      } else if (field[i][j].numBombs === 0) {
        dispatch(revealConnectedCells(i, j))
      }
    }
  }

  const handleFieldRightClick = (i: number, j: number) => {
    console.log('right click', i, j)
    if (status === 'stopped') {
      dispatch(gameStart())
    }
  }

  useEffect(() => {
    initGame()
    window.addEventListener('contextmenu', (event) => {
      event.preventDefault()
    })
  }, [initGame])

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
      <Window css={styles.window} title="Minesweeper">
        <Panel css={styles.panel}>
          <Panel borderWidth={2} css={styles.topPanel} pressed>
            <ScoreView value={numBombs} />
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
            <Field onClick={handleFieldClick} onRightClick={handleFieldRightClick} />
          </Panel>
        </Panel>
      </Window>
      <PlainTextField />
    </div>
  )
}
