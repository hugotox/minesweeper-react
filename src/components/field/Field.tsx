/** @jsxImportSource @emotion/react */

import { useMemo, MouseEvent } from 'react'

import { Cell } from '../cell'

import * as styles from './styles'

export interface FieldProps {
  columns: number
  onClick: (i: number, j: number) => void
  onRightClick: (i: number, j: number) => void
  rows: number
}

export const Field = ({ columns, onClick, onRightClick, rows }: FieldProps) => {
  const grid = useMemo(() => {
    const g = []
    for (let i = 0; i < rows; i++) {
      g.push([...new Array(columns)])
    }
    return g
  }, [rows, columns])

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
      {grid.map((file, i) => {
        return (
          <div key={i} style={{ display: 'flex' }}>
            {file.map((col, j) => {
              return (
                <button css={styles.cellButton} key={`${i}-${j}`} onMouseUp={handleMouseUp(i, j)}>
                  <Cell />
                </button>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
