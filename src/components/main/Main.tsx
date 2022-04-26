/** @jsxImportSource @emotion/react */

import { useCallback, useEffect, useState } from 'react'

import { Field, Panel, Window, ScoreView } from '../../components'
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
  selectRevealedCount,
  checkRemainingBombs,
  gameStop,
  revealBombs,
} from '../../module'
import { BOMB_CELL } from '../../module/gameSlice'
import { Cell } from '../cell'

import * as styles from './styles'

export const Main = () => {
  const dispatch = useAppDispatch()
  const { numColumns, numRows } = useAppSelector(selectFieldSize)
  const numBombs = useAppSelector(selectNumBombs)
  const { flagged } = useAppSelector(selectRevealedCount)
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
    const { numBombs, status: cellStatus } = field[i][j]
    if (status === 'win' || status === 'lose' || cellStatus === 'flag') {
      return
    }
    if (status !== 'playing') {
      dispatch(gameStart())
    }
    if (cellStatus !== 'clicked' && cellStatus !== 'revealed') {
      dispatch(updateCellStatus({ i, j, status: 'clicked' }))
      if (numBombs === BOMB_CELL) {
        dispatch(gameStop('lose'))
        dispatch(revealBombs())
      } else if (numBombs === 0) {
        dispatch(revealConnectedCells(i, j))
      }
      dispatch(checkRemainingBombs())
    }
  }

  const handleFieldRightClick = (i: number, j: number) => {
    const { status: cellStatus } = field[i][j]
    if (status === 'win' || status === 'lose') {
      return
    }
    if (status !== 'playing') {
      dispatch(gameStart())
    }
    if (cellStatus === 'flag') {
      dispatch(updateCellStatus({ i, j, status: 'initial' }))
    } else if (cellStatus !== 'clicked' && cellStatus !== 'revealed') {
      dispatch(updateCellStatus({ i, j, status: 'flag' }))
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
            <ScoreView value={numBombs - flagged} />
            <button
              css={styles.playButton}
              onClick={handleOnStart}
              onMouseDown={() => setIsButtonPressed(true)}
              onMouseUp={() => setIsButtonPressed(false)}
            >
              <Cell css={isButtonPressed && styles.buttonPressed} height={24} width={24}>
                {(status === 'stopped' || status === 'playing') && '🙂'}
                {status === 'lose' && '😭'}
                {status === 'win' && '😎'}
              </Cell>
            </button>
            <ScoreView value={counter} />
          </Panel>
          <Panel pressed>
            <Field onClick={handleFieldClick} onRightClick={handleFieldRightClick} />
          </Panel>
        </Panel>
      </Window>
      {/* <PlainTextField />
      <pre>
        Bombs: {numBombs} <br />
        Revealed: {revealed} <br />
        Total: {numColumns * numRows}
      </pre> */}
    </div>
  )
}
