/*
Given a string, your task is to replace each of 
its characters by the next one in the English alphabet;
 i.e. replace a with b, replace b with c, etc (z would be replaced by a).

Example

For inputString = "crazy", the output should be 
alphabeticShift(inputString) = "dsbaz".
*/

function alphabeticShift(inputString) {
  return inputString.split('').map(element=>{
    if(element === 'z') return 'a'
    return String.fromCharCode(element.charCodeAt()+1)
  }).join('')
}
