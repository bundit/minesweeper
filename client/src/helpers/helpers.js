// Generate mines within the range of the rows and columns given
// Return a list of the mine indices
export function generateRandomMines(rows, columns, totalMines, positionsNotAllowed) {
  // Return value
  let mineIndices = [];
  const length = rows*columns;

  for (let i = 0; i < totalMines; i++) {
    // Random integer in range 0 - length
    let newMine = Math.floor(Math.random() * (length-1));
    // Skip duplicate indices
    if (!mineIndices.includes(newMine) && !positionsNotAllowed.includes(newMine)) {
      mineIndices.push(newMine);
    }
    else
      i--;
  }

  return mineIndices;
}
