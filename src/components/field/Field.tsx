/** @jsxImportSource @emotion/react */

import { MouseEvent } from 'react'

import { numBombToIconName } from '../../helpers'
import { Icon, IconNames } from '../../icons'
import { selectField, useAppSelector } from '../../module'
import { BOMB_CELL } from '../../module/gameSlice'
import { Cell } from '../cell'

import * as styles from './styles'

export interface FieldProps {
  onClick: (i: number, j: number) => void
  onRightClick: (i: number, j: number) => void
}

export const Field = ({ onClick, onRightClick }: FieldProps) => {
  const field = useAppSelector(selectField)

  const handleMouseUp = (i: number, j: number) => (event: MouseEvent<HTMLButtonElement>) => {
    switch (event.button) {
      case 0: {
        onClick(i, j)
        break
      }
      case 2: {
        onRightClick(i, j)
      }
    }
  }

  return (
    <div>
      {field.map((row, i) => {
        return (
          <div key={i} style={{ display: 'flex' }}>
            {row.map((col, j) => {
              const { numBombs, status } = field[i][j]
              const isPressed = status === 'clicked' || status === 'revealed'
              const iconName: IconNames = numBombs >= 0 ? numBombToIconName[numBombs] : 'bombRed'
              const hasBomb = numBombs === BOMB_CELL
              return (
                <button css={styles.cellButton} key={`${i}-${j}`} onMouseUp={handleMouseUp(i, j)}>
                  <Cell
                    css={hasBomb && status === 'clicked' && styles.bombClicked}
                    isPressed={isPressed}
                  >
                    {isPressed && <Icon name={iconName} />}
                  </Cell>
                </button>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
