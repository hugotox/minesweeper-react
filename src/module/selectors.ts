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

export const selectRevealedCount = createSelector(selectField, (field) => {
  let revealed = 0
  let flagged = 0
  const numRows = field.length
  const numColumns = field[0]?.length ?? 0
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numColumns; j++) {
      if (field[i][j].status === 'clicked' || field[i][j].status === 'revealed') {
        revealed += 1
      } else if (field[i][j].status === 'flag') {
        flagged += 1
      }
    }
  }
  return { flagged, revealed }
})
