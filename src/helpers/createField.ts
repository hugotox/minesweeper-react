import { BOMB_CELL, CellData } from '../module/gameSlice'

import { getRandomInt } from './getRandomInt'
import { getSurroundingCells } from './getSurroundingCells'

export interface CreateFieldProps {
  numBombs: number
  numColumns: number
  numRows: number
}

export const createField = ({ numBombs, numColumns, numRows }: CreateFieldProps) => {
  const grid = []

  // 1. Create a grid with empty cells
  for (let i = 0; i < numRows; i++) {
    const column: CellData[] = []
    for (let j = 0; j < numColumns; j++) {
      column.push({
        numBombs: 0,
        status: 'initial',
      })
    }
    grid.push(column)
  }

  // 2. Set bombs in random positions
  let i = 0
  while (i < numBombs) {
    const rowi = getRandomInt(numRows)
    const colj = getRandomInt(numColumns)
    if (grid[rowi][colj].numBombs !== BOMB_CELL) {
      i++
      grid[rowi][colj].numBombs = BOMB_CELL

      // 3. Add +1 to surrounding cells that are not bombs:
      const neighbors = getSurroundingCells(numRows, numColumns, rowi, colj)
      for (let k = 0; k < neighbors.length; k++) {
        const n = neighbors[k]
        if (grid[n[0]][n[1]].numBombs !== BOMB_CELL) {
          grid[n[0]][n[1]].numBombs += 1
        }
      }
    }
  }
  return grid
}
