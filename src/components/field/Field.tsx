/** @jsxImportSource @emotion/react */

import { MouseEvent } from 'react'

import { selectField, useAppSelector } from '../../module'
import { FieldButton } from '../field-button'

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
            {row.map((col, j) => (
              <FieldButton handleMouseUp={handleMouseUp} i={i} j={j} key={`${i}-${j}`} />
            ))}
          </div>
        )
      })}
    </div>
  )
}
