/*
Given two cells on the standard chess board, determine whether they have the same color or not.

Example

For cell1 = "A1" and cell2 = "C3", the output should be
chessBoardCellColor(cell1, cell2) = true.
*/

function chessBoardCellColor(cell1, cell2) {
  const letters = 'ABCDEFGH'
  cell1 = letters.indexOf(cell1[0])+ Number(cell1[1])
  cell2 = letters.indexOf(cell2[0])+ Number(cell2[1])
  return cell1 % 2 === cell2 % 2
}
