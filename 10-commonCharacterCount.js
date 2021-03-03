/*
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".
*/

function commonCharacterCount(s1, s2) {
    let counter = 0
    let arrayS1 = s1.split('')
    let y = s2
    while(arrayS1.length){
        const x = arrayS1.pop()
        if(y.includes(x)){
            counter++
            y = y.replace(x,'')
        }
    }
    return counter
}
