export const getSurroundingCells = (numRows: number, numCols: number, i: number, j: number) => {
  const neighborPositions = [
    [i - 1, j - 1],
    [i - 1, j],
    [i - 1, j + 1],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j - 1],
    [i + 1, j],
    [i + 1, j + 1],
  ]
  const neighbors = []

  for (let k = 0; k < neighborPositions.length; k++) {
    const neig = neighborPositions[k]
    if (0 <= neig[0] && neig[0] < numRows && 0 <= neig[1] && neig[1] < numCols) {
      neighbors.push(neig)
    }
  }
  return neighbors
}
