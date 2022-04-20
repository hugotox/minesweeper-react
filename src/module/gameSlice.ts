import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getRandomInt, getSurroundingCells } from '../helpers'

export type CellStatus = 'initial' | 'flag' | 'clicked' | 'revealed'

export interface GameState {
  counter: number
  field: number[][]
  numBombs: number
  numColumns: number
  numRows: number
  status: 'stopped' | 'playing' | 'win' | 'lose'
}

const EMPTY_CELL = 0
const BOMB_CELL = -1

const initialState: GameState = {
  counter: 0,
  field: [[]],
  numBombs: 10,
  numColumns: 8,
  numRows: 8,
  status: 'stopped',
}

export const gameSlice = createSlice({
  initialState,
  name: 'gameSlice',
  reducers: {
    createField: (state) => {
      const grid = []

      // 1. Create a grid with empty cells
      for (let i = 0; i < state.numRows; i++) {
        const column = [...new Array(state.numColumns)].fill(EMPTY_CELL)
        grid.push(column)
      }

      // 2. Set bombs in random positions
      let i = 0
      while (i < state.numBombs) {
        const rowi = getRandomInt(state.numRows)
        const colj = getRandomInt(state.numColumns)
        if (grid[rowi][colj] !== BOMB_CELL) {
          i++
          grid[rowi][colj] = BOMB_CELL

          // 3. Add +1 to surrounding cells that are not bombs:
          const neighbors = getSurroundingCells(state.numRows, state.numColumns, rowi, colj)
          for (let k = 0; k < neighbors.length; k++) {
            const n = neighbors[k]
            if (grid[n[0]][n[1]] !== BOMB_CELL) {
              grid[n[0]][n[1]] += 1
            }
          }
        }
      }

      state.field = grid
    },
    gameStart: (state) => {
      state.status = 'playing'
      state.counter = 0
    },
    setCounter: (state, { payload }: PayloadAction<number>) => {
      state.counter = payload
    },
  },
})
