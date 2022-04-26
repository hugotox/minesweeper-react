/** @jsxImportSource @emotion/react */

import { MouseEvent } from 'react'

import { numBombToIconName } from '../../helpers'
import { Icon, IconNames } from '../../icons'
import { selectField, selectStatus, useAppSelector } from '../../module'
import { BOMB_CELL } from '../../module/gameSlice'
import { Cell } from '../cell'

import * as styles from './styles'

export interface FieldButtonProps {
  handleMouseUp: (i: number, j: number) => (event: MouseEvent<HTMLButtonElement>) => void
  i: number
  j: number
}

export const FieldButton = ({ handleMouseUp, i, j }: FieldButtonProps) => {
  const field = useAppSelector(selectField)
  const gameStatus = useAppSelector(selectStatus)
  const { numBombs, status } = field[i][j]
  const isPressed = status === 'clicked' || status === 'revealed'
  const hasBomb = numBombs === BOMB_CELL
  let iconName: IconNames | undefined = undefined

  if (isPressed) {
    if (numBombs >= 0) {
      iconName = numBombToIconName[numBombs]
    } else {
      if (status === 'clicked') {
        iconName = 'bombRed'
      } else {
        iconName = 'bomb'
      }
    }
  } else if (status === 'flag') {
    if (gameStatus === 'lose' && numBombs >= 0) {
      iconName = 'cross'
    } else {
      iconName = 'flag'
    }
  }

  return (
    <button css={styles.cellButton} key={`${i}-${j}`} onMouseUp={handleMouseUp(i, j)}>
      <Cell css={hasBomb && status === 'clicked' && styles.bombClicked} isPressed={isPressed}>
        {iconName && <Icon name={iconName} />}
      </Cell>
    </button>
  )
}
