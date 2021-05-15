function checkPalindrome($inputString) {
  return $inputString === join(array_reverse(str_split($inputString)));
}

