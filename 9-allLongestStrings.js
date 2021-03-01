/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
*/

function allLongestStrings(inputArray) {
    let length = 0
    for(const val of inputArray){
        length = Math.max(length, val.length)
    }
    return inputArray.filter(element => element.length === length)
}
