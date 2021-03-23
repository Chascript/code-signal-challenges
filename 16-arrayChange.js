function arrayChange(inputArray) {
/*    [1, 1, 1]
    [1, 2, 3]
    [0, 1, 2] = 3
    
    [-1000, 0, -2, 0]
    [-1000, 0, 1, 2]
    [0,     0, 3, 2] = 5
    
    [2, 1, 10, 1]
    [2, 3, 10, 11]
    [0, 2, 0,  10] = 12
You are given an array of integers. On each move you are allowed 
to increase exactly one of its element by one. Find the minimal 
number of moves required to obtain a strictly increasing sequence 
from the input.

Example

For inputArray = [1, 1, 1], the output should be
arrayChange(inputArray) = 3.
*/
    let counter = 0
    inputArray.reduce((a, b ) => {
        if(a >= b) {
            const diff = (a+1) - b
            console.log(diff)
            counter += diff
            return a + 1
        }
        return b
    })
    return counter
}