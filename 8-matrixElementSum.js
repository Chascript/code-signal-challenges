/*
After becoming famous, the CodeBots decided to move into a new building together. 
Each of the rooms has a different cost, and some of them are free, but there's a 
rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, 
they refuse to stay in any of the free rooms, or any of the rooms below any of the free 
rooms.

Given matrix, a rectangular matrix of integers, where each value represents the 
cost of the room, your task is to return the total sum of all rooms that are suitable 
for the CodeBots (ie: add up all the values that don't appear below a 0).
*/

function matrixElementsSum(matrix) {
    let counter = 0 // to add up total cost of rooms
    for (let i = 0; i < matrix[0].length; i++) { // best way I can describe is that this loop sets up the matrix to loop through each column. The length is the length of the actual values in one array ( The number of columns)
        for(let j = 0; j < matrix.length; j++) {  // This loop will loop through each column of the matrix. The length is how many rows are in the matrix (How many arrays are present inside this one array).
            if(matrix[j][i] === 0){ // if the current room is equal to 0 then...
                break; // stop the columns current loop this will mean all rooms below this 'haunted' room will not be looped through at all.
            }
            counter += matrix[j][i] // else add the rooms cost to counter
        }
    }
    return counter //return the counter which is the total price
}