/*
Write a function that reverses characters in (possibly nested) 
parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
reverseInParentheses(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
reverseInParentheses(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
reverseInParentheses(inputString) = "foorabbazmilb";
*/

function reverseInParentheses(inputString) {
    let x = inputString
    while(x.includes('(')){
        const endBracket = x.indexOf(')')
        const startBracket = x.indexOf('(', endBracket)
        const reversedString = x.slice(startBracket + 1,endBracket).split('').reverse().join('')
        x = x.slice(0, startBracket) + reversedString + x.slice(endBracket + 1)
    }
    return x
}
