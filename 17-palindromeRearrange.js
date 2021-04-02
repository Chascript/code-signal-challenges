/*
Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.

palindrome = all even integers except 1 odd
'' = just even integers
if more than one odd then not palindrome

example

a,a,b,c, = not
a,a,b,b,c,c = yes
a,a,b,b,c,c,d,d = yes
a,b,c,a,b,c,a,b,c = not
*/

function palindromeRearranging(inputString) {
    const array = inputString.split('')
    //count each element
    let tally = []
    array.map(element =>{
        if(tally[element]){
            tally[element]++
        }
        else{
        tally[element] = 1
        }
    })
    // need to get just values which are odd 
    // loop breaks if count2 has more than 1 odd value
    const oddCount = []
    for(const prop in tally){
        if(oddCount.length > 1)break;
        if(tally[prop] % 2 === 1){
            oddCount.push(tally[prop])
        }
    }
    // if more than one odd
    return oddCount.length <= 1
}