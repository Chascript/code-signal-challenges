/*
Check if all digits of the given integer are even.

Example

For n = 248622, the output should be
evenDigitsOnly(n) = true;
For n = 642386, the output should be
evenDigitsOnly(n) = false.
*/

function evenDigitsOnly(n) {
  return n.toString().split('').every(element=>!(Number(element) % 2))
}
