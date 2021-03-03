/*
Ticket numbers usually consist of an even number of digits. 
A ticket number is considered lucky if the sum of the first 
half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.
*/
function isLucky(n){
    return n.toString().slice(0,n.toString().length/2).split('').reduce((a,b)=>Number(a)+Number(b)) === n.toString().slice(n.toString().length/2,n.toString().length).split('').reduce((a,b)=>Number(a)+Number(b))
}