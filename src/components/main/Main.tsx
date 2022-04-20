/** @jsxImportSource @emotion/react */

import { useEffect, useRef, useState } from 'react'

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

  const handleOnStart = () => {
    dispatch(gameStart())
  }

  const handleFieldClick = (i: number, j: number) => {
    if (status === 'stopped') {
      handleOnStart()
    }
    if (field[i][j].numBombs === BOMB_CELL) {
      console.log('bomb clicked')
    }
    dispatch(updateCellStatus({ i, j, status: 'clicked' }))
  }
  const handleFieldRightClick = (i: number, j: number) => {
    console.log('right click', i, j)
    if (status === 'stopped') {
      handleOnStart()
    }
  }

  useEffect(() => {
    dispatch(setField(createField({ numBombs, numColumns, numRows })))

    window.addEventListener('contextmenu', (event) => {
      event.preventDefault()
    })
  }, [dispatch, numBombs, numColumns, numRows])

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
    </div>
  )
}
