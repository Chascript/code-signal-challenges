/*
Given an array of integers, find the 
maximal absolute difference between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 3.
*/
function arrayMaximalAdjacentDifference(inputArray) {
    const diff = []
    inputArray.reduce((a,b)=>{
        diff.push(Math.abs(a-b))
        return b
    })
    return(Math.max(...diff))
}