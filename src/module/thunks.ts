import { getSurroundingCells } from '../helpers'

import { gameStop, updateCellStatus } from './actions'
import { selectField, selectFieldSize, selectNumBombs, selectRevealedCount } from './selectors'
import { AppDispatch, GetState } from './store'

export const revealConnectedCells =
  (givenI: number, givenJ: number) => (dispatch: AppDispatch, getState: GetState) => {
    let state = getState()
    const { numColumns, numRows } = selectFieldSize(state)
    const toCheck: number[][] = [[givenI, givenJ]] // we'll use the array as a queue
    const visited: Record<string, number> = {} // allows to visit each cell only once

    while (toCheck.length > 0) {
      const checkingCell = toCheck.shift()
      if (checkingCell?.length === 2) {
        const neighbors = getSurroundingCells(numRows, numColumns, checkingCell[0], checkingCell[1])

        for (let i = 0; i < neighbors.length; i++) {
          const surroundingCoords = neighbors[i]
          if (surroundingCoords.length === 2) {
            const field = selectField(state)
            const surroundingCell = field[surroundingCoords[0]][surroundingCoords[1]]
            const visitedKey = String(surroundingCoords)
            if (
              surroundingCell.status !== 'clicked' &&
              surroundingCell.status !== 'revealed' &&
              surroundingCell.status !== 'flag' &&
              !visited[visitedKey]
            ) {
              dispatch(
                updateCellStatus({
                  i: surroundingCoords[0],
                  j: surroundingCoords[1],
                  status: 'revealed',
                })
              )
              state = getState() // dispatch updates state, so we have to get it again
              if (surroundingCell.numBombs === 0) {
                toCheck.push(surroundingCoords)
              }
            }
            visited[visitedKey] = 1
          }
        }
      }
    }
  }

export const revealBombs = () => (dispatch: AppDispatch, getState: GetState) => {
  const state = getState()
  const field = selectField(state)
  const { numColumns, numRows } = selectFieldSize(state)
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numColumns; j++) {
      const { numBombs, status } = field[i][j]
      if (numBombs === -1 && status !== 'clicked') {
        dispatch(updateCellStatus({ i, j, status: 'revealed' }))
      }
    }
  }
}

export const checkRemainingBombs = () => (dispatch: AppDispatch, getState: GetState) => {
  const state = getState()
  const numBombs = selectNumBombs(state)
  const { numColumns, numRows } = selectFieldSize(state)
  let { revealed } = selectRevealedCount(state)
  if (revealed + numBombs === numRows * numColumns) {
    dispatch(gameStop('win'))
  }
}
