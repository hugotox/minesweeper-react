import { createSelector } from '@reduxjs/toolkit'

import { RootState } from './store'

export const selectRoot = (state: RootState) => state.gameSlice

export const selectFieldSize = createSelector(selectRoot, (state) => {
  return {
    numColumns: state.numColumns,
    numRows: state.numRows,
  }
})

export const selectCounter = createSelector(selectRoot, (state) => state.counter)

export const selectNumBombs = createSelector(selectRoot, (state) => state.numBombs)

export const selectStatus = createSelector(selectRoot, (state) => state.status)

export const selectField = createSelector(selectRoot, (state) => state.field)

export const selectRevealedCount = createSelector(selectRoot, (state) => {
  let revealed = 0
  for (let i = 0; i < state.numRows; i++) {
    for (let j = 0; j < state.numColumns; j++) {
      if (state.field[i][j].status === 'clicked' || state.field[i][j].status === 'revealed') {
        revealed += 1
      }
    }
  }
  return revealed
})
