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
