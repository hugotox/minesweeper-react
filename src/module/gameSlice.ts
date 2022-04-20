import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CellStatus = 'initial' | 'flag' | 'clicked' | 'revealed'

export interface CellData {
  numBombs: number
  status: CellStatus
}

export interface GameState {
  counter: number
  field: CellData[][]
  numBombs: number
  numColumns: number
  numRows: number
  status: 'stopped' | 'playing' | 'win' | 'lose'
}

export const BOMB_CELL = -1

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
    gameStart: (state) => {
      state.status = 'playing'
      state.counter = 0
    },
    setCounter: (state, { payload }: PayloadAction<number>) => {
      state.counter = payload
    },
    setField: (state, { payload }: PayloadAction<CellData[][]>) => {
      state.field = payload
    },
    updateCellStatus: (
      state,
      { payload }: PayloadAction<{ i: number; j: number; status: CellStatus }>
    ) => {
      const { i, j, status } = payload
      state.field[i][j].status = status
    },
  },
})
