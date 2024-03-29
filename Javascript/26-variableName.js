/*
Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.

Example

For name = "var_1__Int", the output should be
variableName(name) = true;
For name = "qq-q", the output should be
variableName(name) = false;
For name = "2w2", the output should be
variableName(name) = false.
*/

function variableName(name) {
  return /^[a-z_]+\w$/i.test(name)
  //regular expression
  // // pattern goes inbetween these forward slashes
  // i will mean both uppercase or lower case
  //[a-z] or [A-Z]
  // _ for the symbol thats allowed
  // 
}
