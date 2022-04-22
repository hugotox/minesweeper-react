import { getSurroundingCells } from '../helpers'

import { updateCellStatus } from './actions'
import { selectField, selectFieldSize } from './selectors'
import { AppDispatch, GetState } from './store'

export const revealConnectedCells =
  (givenI: number, givenJ: number) => (dispatch: AppDispatch, getState: GetState) => {
    let state = getState()
    const { numColumns, numRows } = selectFieldSize(state)
    const toCheck: number[][] = [[givenI, givenJ]] // we'll use the array as a queue
    let toReveal: number[][] = []

    while (toCheck.length > 0) {
      const checkingCell = toCheck.shift()
      if (checkingCell?.length === 2) {
        const neighbors = getSurroundingCells(numRows, numColumns, checkingCell[0], checkingCell[1])

        for (let i = 0; i < neighbors.length; i++) {
          const surroundingCoords = neighbors[i]
          if (surroundingCoords.length === 2) {
            const field = selectField(state)
            const surroundingCell = field[surroundingCoords[0]][surroundingCoords[1]]

            if (surroundingCell.status !== 'clicked' && surroundingCell.status !== 'revealed') {
              dispatch(
                updateCellStatus({
                  i: surroundingCoords[0],
                  j: surroundingCoords[1],
                  status: 'revealed',
                })
              )
              state = getState() // dispatch updates state, so we have to get it again
              if (surroundingCell.numBombs === 0) {
                toReveal = toReveal.concat(
                  getSurroundingCells(
                    numRows,
                    numColumns,
                    surroundingCoords[0],
                    surroundingCoords[1]
                  )
                )
                toCheck.push(surroundingCoords)
              } else {
                toReveal = toReveal.concat([[surroundingCoords[0], surroundingCoords[1]]])
              }
            }
          }
        }
      }
    }

    toReveal.forEach((coords) => {
      dispatch(updateCellStatus({ i: coords[0], j: coords[1], status: 'revealed' }))
    })
  }

export const gameOver = () => (dispatch: AppDispatch) => {}
